import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Credentials } from './Credentials'

const Playlist=()=>{

    const [token,setToken] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [data,setData] = useState([]);
    const [image,setImage] = useState([]);

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
              axios('https://api.spotify.com/v1/playlists/37i9dQZF1DWYtEjm4ihp5w/tracks?offset=0&limit=6&market=US',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':'Bearer ' + res.data.access_token
                    }
                })
                .then(playlistresponse =>{
                    setData(playlistresponse.data.items)
                })
                .catch(error=>{
                    setError(error)
                });
            axios('https://api.spotify.com/v1/playlists/37i9dQZF1DWYtEjm4ihp5w/images',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':'Bearer ' + res.data.access_token
                    }
                    })
                    .then(imageresponse =>{
                        setImage(imageresponse.data[0].url)
                        console.log(image)
                    })
                    .catch(error=>{
                        setError(error)
                    });
            })
          .catch((error)=>{
              setError(error);
              console.log(error);
          })
    }, []);

    return(
        <section className="py-5 news" id="playlist">
            <div className="classement__item row card ">
            <div className='card-inner'>
            <div className='card-front'>
                <img src={image} />
                </div>
                <div className='card-back'>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">TITLE</th>
                        <th scope="col">ARTISTE</th>
                        <th scope="col">ALBUM</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((item)=>(
                          <tr>
                          <td><img src={item.track.album.images[0].url} className="image_item" /></td>
                          <td> {item.track.name}</td>
                          <td>{item.track.artists.map((artist)=>(
                              <span>{artist.name}</span>
                          ))}
                          </td>
                          <td>{item.track.album.name}</td>
                          </tr>
                      ))} 
                    </tbody>
                    </table>
                </div>
            </div>
            </div>
        </section>

    )
}

export default Playlist