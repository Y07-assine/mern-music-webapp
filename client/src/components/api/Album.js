import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { albumURL } from '../../constant';
import { Credentials } from './Credentials';
import { Loader } from 'semantic-ui-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'



const Album = ()=>{
    const [token,setToken] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [data,setData] = useState([]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            }
            
        ]
    }
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
              axios
                .get(albumURL)
                .then(albumres =>{
                    albumres.data.map((id)=>{
                        axios(`https://api.spotify.com/v1/albums/${id.albumId}`,{
                            method:'GET',
                            headers:{
                                'Content-Type':'application/json',
                                'Authorization':'Bearer ' + token
                            }
                        })
                        .then(response=>{
                            setData(data=>[...data,response.data])
                            console.log(response.data)
                            setLoading(false)
                        })
                        .catch(error=>{
                            setError(error)
                        })
                        console.log(id.albumId)
                    })
                })
                .catch(error=>{
                    setError(error)
                })
          })
          .catch((error)=>{
              setError(error);
              console.log(error);
          })
    }, [])
    console.log(data);
    return(

        <section className="albums" id="album">
            <div className="container">
            <div className="lgfgYE album">
                <span className="title">New arrivals</span>
            </div> 
            { loading && (
            <Loader active inline='centered' />
            )}
            <Slider {...settings}>        
            {data.map((album)=>(
                <div className="item__album">
                    <Link to={`/album/${album.id}`}>
                        <img src={album.images[0].url} className="image__album" />
                    </Link>
                    <div class="text-center">
                        <h3 class="album-title">
                            <span className="album__name">{album.name}</span>
                            <div className="artists">
                                {album.artists.map((artist)=>(
                                    <Link to={`/artist/${artist.id}`} ><span key={artist.id} className="album__artist">{artist.name}</span></Link>
                                ))}
                            </div>
                            <span className="album__date">{album.release_date}</span>
                        </h3>
                    </div>
                    
                </div>
            ))}
            </Slider>
            </div>
        </section>
    )
}

export default Album