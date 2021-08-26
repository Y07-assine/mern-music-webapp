import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Credentials } from './Credentials'
import Header from '../Header'
import {CircularProgress} from '@material-ui/core';

const Artist = (artist)=>{
    const artistId = artist.match.params.id;
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [album,setAlbum]=useState([]);
    const [data,setData] = useState([]);
    const [followers,setFollowers] = useState();
    console.log(artistId)

    useEffect(() => {
        const spotify = Credentials();
        const auth = new Buffer(spotify.ClientId + ':' + spotify.ClientSecret)
        setLoading(true);
        axios('https://accounts.spotify.com/api/token',{
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded',
                  'Authorization':'Basic ' + auth.toString('base64')
              },
              data:'grant_type=client_credentials',
              method:'POST'
          })
          .then(res =>{
              const headers={
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + res.data.access_token
                };
                axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums`,{headers})
                    .then(albums =>{
                        setAlbum(albums.data.items)
                        setLoading(false)
                    })
                    .catch(error=>{
                        setError(error)
                        setLoading(false)
                    });
                axios(`https://api.spotify.com/v1/artists/${artistId}`,{
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization':'Bearer ' + res.data.access_token
                    }
                })
                .then(response=>{
                    setData(response.data)
                    setFollowers(response.data.followers.total)
                    setLoading(false)
                
                })
                .catch(error=>{
                    setError(error)
                    setLoading(false)
                });
        })
        .catch(error=>{
            setError(error)
        });
    }, []);
    const sectionStyle = {
        background: "linear-gradient(white, black)",
        background : "#000 url("+(data.images ? data.images[1].url : null) + ")" +"no-repeat center center/cover"
    };
    return(
        <>
            <Header />
            { loading ? (
             <div className="progress"><CircularProgress /></div>
            ):<>
            <section className="artist__details" style={ sectionStyle } >
                <div className="container">
                <div className="row header_with_cover_artist">
                    <div className=" artist__description">
                        <img src={data.images ? data.images[0].url : null}  />
                    </div>
                    <div className=" item-news artist__infos">
                        <h3 class="artist-title">
                            <span className="artist__status">{data.type}</span>
                            <span className="artist__name">{data.name}</span>
                            <span><span className="followers">{followers}</span> Followers</span>
                        </h3>
                    </div>
                </div>
            </div>
            </section>
            <section className="artist__projects">
                <div className="row top__projects">
                <h3 class="tracklist border">Popular {data.name}'s Projects </h3>
                    <div className="grid-container">
                        {album.map((project)=>(
                            <div className="artist__card" >
                            <img src={project.images[0].url} className="image__project" />
                            <div class="text-center">
                                <h3 class="album-title">
                                    <span className="album__name">{project.name}</span>
                                    <span className="project__format">{project.album_type}</span>
                                    <span className="album__date">{project.release_date}</span>
                                </h3>
                            </div>
                            </div>
                        ))}   
                    </div>
                </div>
            </section>
            </>}
        </>
    )
}

export default Artist