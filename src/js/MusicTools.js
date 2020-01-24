import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

import Index from "./Index/Index.js";
import Maths from "./Maths/Maths.js";
import Playlists from "./Playlist/Playlists.js";
import PlaylistView from "./Playlist/View/View.js";
import Settings from "./Settings/Settings.js";
import Admin from "./Admin/Admin.js";

import NotFound from "./Error/NotFound.js";

import showMessage from "./Toast.js"

const axios = require('axios');

class MusicTools extends Component {

    constructor(props){
        super(props);
        this.state = {
            type: null,
            spotify_linked: null
        }
    }

    componentDidMount() {
        this.getUserInfo();
    }

    componentWillUnmount() {
        this.userInfoCancelToken.cancel();
    }

    getUserInfo(){
        this.userInfoCancelToken = axios.CancelToken.source();

        var self = this;
        axios.get('/api/user', {
            cancelToken: this.userInfoCancelToken.token
        })
        .then((response) => {
            self.setState({
                type: response.data.type,
                spotify_linked: response.data.spotify_linked
            })
        })
        .catch((error) => {
            showMessage(`error getting user info (${error.response.status})`);
        });
    }

    render(){
        return (
            <Router>
                <div className="card pad-12">
                    <table className="sidebar pad-3">
                        <tbody>
                        <tr><td><span><Link to="/app">Home</Link></span></td></tr>
                        <tr><td><Link to="/app/playlists">Playlists</Link></td></tr>
                        <tr><td><Link to="/app/maths/count">Maths</Link></td></tr>
                        <tr><td><Link to="/app/settings/password">Settings</Link></td></tr>
                        { this.state.type == 'admin' && <tr><td><Link to="/app/admin/lock">Admin</Link></td></tr> }
                        <tr><td><a href="/auth/logout">Logout</a></td></tr>
                        <tr><td><a href="https://sarsoo.xyz">sarsoo.xyz</a></td></tr>
                        </tbody>
                    </table>

                    <div className="pad-9">
                        <Switch>
                            <Route path="/app" exact component={Index} />
                            <Route path="/app/playlists" component={Playlists} />
                            <Route path="/app/maths" component={Maths} />
                            <Route path="/app/settings" component={Settings} />
                            { this.state.type == 'admin' && <Route path="/app/admin" component={Admin} /> }
                            <Route path='/app/playlist/:name' component={PlaylistView} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
                <footer>
                    <a href="https://github.com/Sarsoo/spotify-web">view source code</a>
                </footer>
            </Router>
        );
    }

}

export default MusicTools;