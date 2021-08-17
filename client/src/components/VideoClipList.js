import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Youtubeclip from './api/Youtubeclip'
import { Loader } from 'semantic-ui-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css"
import { videoClipURL } from '../constant'
import ReactPlayer from 'react-player'

const VideoClipsList = ()=>{

    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [data,setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get(videoClipURL)
            .then(res=>{
                setData(res.data)
                console.log(res.data)
                setLoading(false)
            })
            .catch(err=>{
                setError(err)
                setLoading(false)
            })

    }, [])

    const settings = {
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 5,
          slidesToScroll: 4,
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

    return(
        <section className="clips" id="clips">
            <div className="container">
                <div className="lgfgYE clip ">
                    <span className="title">LAST CLIPS</span>
                </div> 
                { loading && (
                    <Loader active inline='centered' />
                )}
                <div className="container">
                <Slider {...settings}>
                {data.map((video)=>(
                    <div className="videoClip">
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${video.youtubeId}`} width='95%' height='200px' />
                    </div>
                ))}
                </Slider>
                </div>
            </div>
        </section>
    )

}

export default VideoClipsList
