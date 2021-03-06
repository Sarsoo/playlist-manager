from dataclasses import dataclass
import logging
from datetime import timedelta, datetime, timezone
from typing import Optional

from spotframework.net.network import Network as SpotifyNetwork, SpotifyNetworkException
from spotframework.net.user import NetworkUser
from fmframework.net.network import Network as FmNetwork
from music.model.user import User
from music.model.config import Config

logger = logging.getLogger(__name__)


def refresh_token_database_callback(user: User) -> None:
    """Callback for handling when a spotframework network updates user credemtials

    Used to store newly authenticated credentials

    Args:
        user (User): Subject user
    """

    if isinstance(user, DatabaseUser):
        user_obj = User.collection.filter('username', '==', user.user_id.strip().lower()).get()
        if user_obj is None:
            logger.error(f'user {user} not found')

        user_obj.access_token = user.access_token
        user_obj.refresh_token = user.refresh_token
        user_obj.last_refreshed = user.last_refreshed
        user_obj.token_expiry = user.token_expiry

        user_obj.update()

        logger.debug(f'{user.user_id} database entry updated')
    else:
        logger.error('user has no attached id')


def get_authed_spotify_network(user: User) -> Optional[SpotifyNetwork]:
    """Get an authenticated spotframework network for a given user

    Args:
        user (User): Subject user to retrieve a network for

    Returns:
        Optional[SpotifyNetwork]: Authenticated spotframework network
    """

    if user is not None:
        if user.spotify_linked:
            config = Config.collection.get("config/music-tools")

            user_obj = DatabaseUser(client_id=config.spotify_client_id,
                                    client_secret=config.spotify_client_secret,
                                    refresh_token=user.refresh_token,
                                    user_id=user.username,
                                    access_token=user.access_token)
            user_obj.on_refresh.append(refresh_token_database_callback)

            net = SpotifyNetwork(user_obj)

            if user.last_refreshed is not None and user.token_expiry is not None:
                if user.last_refreshed + timedelta(seconds=user.token_expiry - 1) \
                        < datetime.now(timezone.utc):
                    net.refresh_access_token()
            else:
                net.refresh_access_token()

            try:
                net.refresh_user_info()
            except SpotifyNetworkException:
                logger.exception(f'error refreshing user info for {user.username}')

            return net
        else:
            logger.error('user spotify not linked')
    else:
        logger.error(f'no user provided')


def get_authed_lastfm_network(user: User) -> Optional[FmNetwork]:
    """Get an authenticated fmframework network for a given user

    Args:
        user (User): Subject user to retrieve a network for

    Returns:
        Optional[FmNetwork]: Authenticated fmframework network
    """

    if user is not None:
        if user.lastfm_username:
            config = Config.collection.get("config/music-tools")
            return FmNetwork(username=user.lastfm_username, api_key=config.last_fm_client_id)
        else:
            logger.error(f'{user.username} has no last.fm username')
    else:
        logger.error(f'no user provided')


@dataclass
class DatabaseUser(NetworkUser):
    """Adding Music Tools username to spotframework network user"""
    user_id: str = None
