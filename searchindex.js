Search.setIndex({docnames:["index","src/modules","src/music","src/music.api","src/music.auth","src/music.cloud","src/music.db","src/music.model","src/music.tasks"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["index.rst","src/modules.rst","src/music.rst","src/music.api.rst","src/music.auth.rst","src/music.cloud.rst","src/music.db.rst","src/music.model.rst","src/music.tasks.rst"],objects:{"":{music:[2,0,0,"-"]},"music.api":{admin:[3,0,0,"-"],api:[3,0,0,"-"],decorators:[3,0,0,"-"],fm:[3,0,0,"-"],player:[3,0,0,"-"],spotfm:[3,0,0,"-"],spotify:[3,0,0,"-"],tag:[3,0,0,"-"]},"music.api.admin":{get_tasks:[3,1,1,""]},"music.api.api":{all_playlists_route:[3,1,1,""],all_users_route:[3,1,1,""],change_password:[3,1,1,""],image:[3,1,1,""],playlist_get_delete_route:[3,1,1,""],playlist_post_put_route:[3,1,1,""],run_playlist:[3,1,1,""],run_playlist_task:[3,1,1,""],run_user:[3,1,1,""],run_user_task:[3,1,1,""],run_users:[3,1,1,""],user_route:[3,1,1,""]},"music.api.decorators":{admin_required:[3,1,1,""],check_dict:[3,1,1,""],cloud_task:[3,1,1,""],gae_cron:[3,1,1,""],is_basic_authed:[3,1,1,""],is_logged_in:[3,1,1,""],lastfm_username_required:[3,1,1,""],login_or_basic_auth:[3,1,1,""],login_required:[3,1,1,""],spotify_link_required:[3,1,1,""],validate_args:[3,1,1,""],validate_json:[3,1,1,""]},"music.api.fm":{daily_scrobbles:[3,1,1,""]},"music.api.player":{next_track:[3,1,1,""],play:[3,1,1,""],shuffle:[3,1,1,""],volume:[3,1,1,""]},"music.api.spotfm":{count:[3,1,1,""],playlist_refresh:[3,1,1,""],run_playlist_album_task:[3,1,1,""],run_playlist_artist_task:[3,1,1,""],run_playlist_track_task:[3,1,1,""],run_user:[3,1,1,""],run_user_task:[3,1,1,""],run_users:[3,1,1,""]},"music.api.spotify":{sort:[3,1,1,""]},"music.api.tag":{delete_tag:[3,1,1,""],get_tag:[3,1,1,""],post_tag:[3,1,1,""],put_tag:[3,1,1,""],run_tag_task:[3,1,1,""],tag_refresh:[3,1,1,""],tag_route:[3,1,1,""],tags:[3,1,1,""]},"music.auth":{auth:[4,0,0,"-"]},"music.auth.auth":{auth:[4,1,1,""],deauth:[4,1,1,""],login:[4,1,1,""],logout:[4,1,1,""],register:[4,1,1,""],token:[4,1,1,""]},"music.cloud":{"function":[5,0,0,"-"],offload_or_run_user_playlist:[5,1,1,""],queue_run_user_playlist:[5,1,1,""],tasks:[5,0,0,"-"]},"music.cloud.function":{run_user_playlist_function:[5,1,1,""],update_tag:[5,1,1,""]},"music.cloud.tasks":{refresh_all_user_playlist_stats:[5,1,1,""],refresh_playlist_task:[5,1,1,""],refresh_user_playlist_stats:[5,1,1,""],refresh_user_stats_task:[5,1,1,""],run_user_playlist_task:[5,1,1,""],update_all_user_playlists:[5,1,1,""],update_all_user_tags:[5,1,1,""],update_playlists:[5,1,1,""]},"music.db":{database:[6,0,0,"-"],part_generator:[6,0,0,"-"]},"music.db.database":{DatabaseUser:[6,2,1,""],get_authed_lastfm_network:[6,1,1,""],get_authed_spotify_network:[6,1,1,""],refresh_token_database_callback:[6,1,1,""]},"music.db.database.DatabaseUser":{user_id:[6,3,1,""]},"music.db.part_generator":{PartGenerator:[6,2,1,""]},"music.db.part_generator.PartGenerator":{get_recursive_parts:[6,4,1,""],process_reference_by_name:[6,4,1,""],process_reference_by_reference:[6,4,1,""],reset:[6,4,1,""]},"music.model":{config:[7,0,0,"-"],playlist:[7,0,0,"-"],tag:[7,0,0,"-"],user:[7,0,0,"-"]},"music.model.config":{Config:[7,2,1,""]},"music.model.config.Config":{Meta:[7,2,1,""],collection:[7,3,1,""],collection_name:[7,3,1,""],last_fm_client_id:[7,3,1,""],playlist_cloud_operating_mode:[7,3,1,""],secret_key:[7,3,1,""],spotify_client_id:[7,3,1,""],spotify_client_secret:[7,3,1,""]},"music.model.config.Config.Meta":{collection_name:[7,3,1,""]},"music.model.playlist":{Playlist:[7,2,1,""],Sort:[7,2,1,""]},"music.model.playlist.Playlist":{Meta:[7,2,1,""],add_last_month:[7,3,1,""],add_this_month:[7,3,1,""],chart_limit:[7,3,1,""],chart_range:[7,3,1,""],collection:[7,3,1,""],collection_name:[7,3,1,""],day_boundary:[7,3,1,""],description_overwrite:[7,3,1,""],description_suffix:[7,3,1,""],include_library_tracks:[7,3,1,""],include_recommendations:[7,3,1,""],last_updated:[7,3,1,""],lastfm_stat_album_count:[7,3,1,""],lastfm_stat_album_percent:[7,3,1,""],lastfm_stat_artist_count:[7,3,1,""],lastfm_stat_artist_percent:[7,3,1,""],lastfm_stat_count:[7,3,1,""],lastfm_stat_last_refresh:[7,3,1,""],lastfm_stat_percent:[7,3,1,""],mutable_keys:[7,3,1,""],name:[7,3,1,""],parts:[7,3,1,""],playlist_references:[7,3,1,""],recommendation_sample:[7,3,1,""],shuffle:[7,3,1,""],sort:[7,3,1,""],to_dict:[7,4,1,""],type:[7,3,1,""],uri:[7,3,1,""]},"music.model.playlist.Playlist.Meta":{collection_name:[7,3,1,""]},"music.model.playlist.Sort":{"default":[7,3,1,""],release_date:[7,3,1,""],shuffle:[7,3,1,""]},"music.model.tag":{Tag:[7,2,1,""]},"music.model.tag.Tag":{Meta:[7,2,1,""],albums:[7,3,1,""],artists:[7,3,1,""],collection:[7,3,1,""],collection_name:[7,3,1,""],count:[7,3,1,""],last_updated:[7,3,1,""],name:[7,3,1,""],proportion:[7,3,1,""],tag_id:[7,3,1,""],time_objects:[7,3,1,""],to_dict:[7,4,1,""],total_time:[7,3,1,""],total_time_ms:[7,3,1,""],total_user_scrobbles:[7,3,1,""],tracks:[7,3,1,""],username:[7,3,1,""]},"music.model.tag.Tag.Meta":{collection_name:[7,3,1,""]},"music.model.user":{User:[7,2,1,""]},"music.model.user.User":{Meta:[7,2,1,""],access_token:[7,3,1,""],check_password:[7,4,1,""],collection:[7,3,1,""],collection_name:[7,3,1,""],email:[7,3,1,""],last_login:[7,3,1,""],last_refreshed:[7,3,1,""],lastfm_username:[7,3,1,""],locked:[7,3,1,""],password:[7,3,1,""],refresh_token:[7,3,1,""],spotify_linked:[7,3,1,""],to_dict:[7,4,1,""],token_expiry:[7,3,1,""],type:[7,3,1,""],username:[7,3,1,""],validated:[7,3,1,""]},"music.model.user.User.Meta":{collection_name:[7,3,1,""]},"music.music":{create_app:[2,1,1,""]},"music.tasks":{create_playlist:[8,0,0,"-"],refresh_lastfm_stats:[8,0,0,"-"],run_user_playlist:[8,0,0,"-"],update_tag:[8,0,0,"-"]},"music.tasks.create_playlist":{create_playlist:[8,1,1,""]},"music.tasks.refresh_lastfm_stats":{refresh_lastfm_album_stats:[8,1,1,""],refresh_lastfm_artist_stats:[8,1,1,""],refresh_lastfm_track_stats:[8,1,1,""]},"music.tasks.run_user_playlist":{run_user_playlist:[8,1,1,""]},"music.tasks.update_tag":{update_tag:[8,1,1,""]},music:{api:[3,0,0,"-"],auth:[4,0,0,"-"],cloud:[5,0,0,"-"],db:[6,0,0,"-"],init_log:[2,1,1,""],model:[7,0,0,"-"],music:[2,0,0,"-"],tasks:[8,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method"},terms:{"class":[6,7],"default":[3,7],"enum":7,"function":[1,2,8],"long":8,"return":[2,3,4,7],access_token:[6,7],add_last_month:7,add_this_month:7,adding:6,admin:[1,2],admin_requir:3,album:7,all:[3,5],all_playlists_rout:3,all_users_rout:3,allow:4,api:[0,1,2],app:[0,2,3,8],arg:[3,7],artist:7,asid:6,auth:[0,1,2],backend:2,base:[6,7],blueprint:[2,3],change_password:3,chart_limit:7,chart_rang:7,check_dict:3,check_password:7,client_id:6,client_secret:6,cloud:[0,1,2],cloud_task:3,code:5,collect:7,collection_nam:7,compon:6,config:[1,2],consol:2,contain:[2,7],content:[0,1],convert:7,count:[3,7],creat:[0,2,5],create_app:2,create_playlist:[1,2],daily_scrobbl:3,data:7,databas:[1,2],databaseus:6,day_boundari:7,deauth:4,decor:[1,2],delai:5,delete_tag:3,depend:5,descript:[3,7],description_overwrit:7,description_suffix:7,dict:7,email:7,endpoint:[3,4],enumer:7,environ:5,expected_arg:3,fals:2,fireo:7,flask:[2,3],fmnet:8,from:6,func:3,gae_cron:3,gener:[2,8],get:4,get_authed_lastfm_network:6,get_authed_spotify_network:6,get_recursive_part:6,get_tag:3,get_task:3,given:[3,5],hand:5,home:4,html:4,http:[3,4],imag:3,includ:[4,5,8],include_library_track:7,include_recommend:7,index:0,infrastuctur:5,init_log:2,initialis:2,interfac:6,is_basic_auth:3,is_logged_in:3,kwarg:[3,7],last_fm_client_id:7,last_login:7,last_refresh:7,last_upd:7,lastfm_stat_album_count:7,lastfm_stat_album_perc:7,lastfm_stat_artist_count:7,lastfm_stat_artist_perc:7,lastfm_stat_count:7,lastfm_stat_last_refresh:7,lastfm_stat_perc:7,lastfm_usernam:7,lastfm_username_requir:3,layer:[6,7],level:2,load:[2,3],lock:7,log:2,login:4,login_or_basic_auth:3,login_requir:3,logout:4,manag:7,meta:7,model:[0,1,2,6],modul:[0,1],mutable_kei:7,name:[6,7,8],net:6,network:6,networkus:6,next_track:3,none:[3,6,7,8],object:[6,7],off:5,offload_or_run_user_playlist:5,oper:8,option:[3,6],orm:[6,7],packag:[0,1],page:[0,4],paramet:[3,7],part:7,part_gener:[1,2],partgener:6,password:[4,7],plai:3,player:[1,2],playlist:[0,1,2,3,5,8],playlist_cloud_operating_mod:7,playlist_get_delete_rout:3,playlist_nam:[5,8],playlist_post_put_rout:3,playlist_refer:7,playlist_refresh:3,post:4,post_tag:3,process_reference_by_nam:6,process_reference_by_refer:6,proport:7,put_tag:3,queue:5,queue_run_user_playlist:5,readi:2,recommendation_sampl:7,redirect:4,ref:6,refresh:5,refresh_all_user_playlist_stat:5,refresh_lastfm_album_stat:8,refresh_lastfm_artist_stat:8,refresh_lastfm_stat:[1,2],refresh_lastfm_track_stat:8,refresh_playlist_task:5,refresh_token:[6,7],refresh_token_database_callback:6,refresh_user_playlist_stat:5,refresh_user_stats_task:5,regist:4,relat:4,release_d:7,request:4,request_param:3,reset:[4,6],respons:[3,4],result:4,retriev:[2,3,4],root:2,rout:4,run:[2,8],run_playlist:3,run_playlist_album_task:3,run_playlist_artist_task:3,run_playlist_task:3,run_playlist_track_task:3,run_tag_task:3,run_us:3,run_user_playlist:[1,2],run_user_playlist_funct:5,run_user_playlist_task:5,run_user_task:3,search:0,secret_kei:7,secur:4,serverless:5,sfor:5,shuffl:[3,7],smart:[0,7],sort:[3,7],spotfm:[1,2],spotframework:6,spotifi:[0,1,2],spotify_client_id:7,spotify_client_secret:7,spotify_link:7,spotify_link_requir:3,spotify_us:7,spotnet:8,stack:2,stat:5,str:[5,6],submiss:4,submodul:1,subpackag:1,tag:[1,2,5,8],tag_id:[3,5,7],tag_refresh:3,tag_rout:3,task:[0,1,2],time_object:7,to_dict:7,token:4,token_expiri:7,tool:[2,6],top:2,total_tim:7,total_time_m:7,total_user_scrobbl:7,track:7,type:[2,3,4,7],upad:8,updat:[5,8],update_all_user_playlist:5,update_all_user_tag:5,update_playlist:5,update_tag:[1,2,5],uri:7,user:[1,2,3,5,6,8],user_id:6,user_rout:3,usernam:[5,6,7,8],valid:7,validate_arg:3,validate_json:3,valu:7,volum:3,web:0},titles:["Music Tools","music","music package","music.api package","music.auth package","music.cloud package","music.db package","music.model package","music.tasks package"],titleterms:{"function":5,admin:3,api:3,auth:4,cloud:5,config:7,content:[2,3,4,5,6,7,8],create_playlist:8,databas:6,decor:3,indic:0,model:7,modul:[2,3,4,5,6,7,8],music:[0,1,2,3,4,5,6,7,8],packag:[2,3,4,5,6,7,8],part_gener:6,player:3,playlist:7,refresh_lastfm_stat:8,run_user_playlist:8,spotfm:3,spotifi:3,submodul:[2,3,4,5,6,7,8],subpackag:2,tabl:0,tag:[3,7],task:[5,8],tool:0,update_tag:8,user:7}})