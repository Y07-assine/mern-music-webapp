import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Credentials } from './Credentials'
import Header from '../Header'

const Artist = (artist)=>{
    const artistId = artist.match.params.id;
    const [token,setToken] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [album,setAlbum]=useState([]);
    const [data,setdata] = useState()


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
                axios(`https://api.spotify.com/v1/artists/${artistId}/albums`,{
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization':'Bearer ' + token
                    }
                    })
                    .then(res =>{
                        setAlbum(res.data.items)
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
                        'Authorization':'Bearer ' + token
                    }
                })
                .then(res=>{
                    setdata(res.data)
                    console.log(data)
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
    
    return(
        <>
            <Header />
            
            <section className="artist__projects">
                <div className="row top__projects">
                <h3 class="tracklist border">Popular  Projects</h3>
                    <div className="grid-container">
                        {album.map((project)=>(
                            <div>
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

        </>
    )
}

export default Artist