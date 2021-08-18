import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Credentials } from './Credentials'
import Header from '../Header'



const AlbumDetails = (album)=>{
    const albumId = album.match.params.id;
    const [token,setToken] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [data,setData] = useState([]);
    const [tracks,setTracks] = useState([])
    console.log(albumId)
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
              setToken(res.data.access_token);
              axios(`https://api.spotify.com/v1/albums/${albumId}`,{
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization':'Bearer ' + token
                    }
                })
                .then(response=>{
                    setData(response.data)
                    setTracks(response.data.tracks.items)
                    console.log(response.data.tracks.items)
                    setLoading(false)
                })
                .catch(error=>{
                    setError(error)
                });
        })
        .catch(error=>{
            setError(error)
        });
    }, [])
    const sectionStyle = {
        background: "linear-gradient(white, black)",
        background : "#000 url("+(data.images ? data.images[1].url : null) + ")" +"no-repeat center center/cover"
    };
    return(
        <>
        <Header />
        <section className="album__details" style={ sectionStyle } >
            <div className="container">
            <div className="cover header_with_cover_art">
                <div className="col-sm-4 album__description">
                    <img src={data.images ? data.images[0].url : null} />
                </div>
                <div className="col-sm-12 item-news album__description">
                    <h3 class="album-title">
                        <span className="album__format">{data.type}</span>
                        <span className="album__name">{data.name}</span>
                        <span className="album__artist">{data.artists ? data.artists[0].name : null}</span>
                        <span className="album__date">Released {data.release_date}</span>
                    </h3>
                </div>
            </div>
        </div>
        </section>

        <section className="album__tracklist">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <h3 class="tracklist  ">Tracklist</h3>
                        <p className="tracklist__item">
                        {tracks.map((track,index)=>(
                            <>{index+1}. {track.name} <br /></>
                        ))}</p>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default AlbumDetails