import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import News from './News';
import LatestNews from './LatestNews';
import { newsListURL } from '../constant';
import {CircularProgress} from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";


const ListNews = ()=>{
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [data,setData] = useState([]);
    const [latest,setLatest] = useState([]);

    useEffect(()=>{
        setLoading(true);
        axios
            .get(newsListURL)
            .then(res=>{
                setData(res.data);
                setLatest(res.data[0])
                setLoading(false);
            })
            .catch(err=>{
                setError(err);
                setLoading(false);
            });
        },[]);
        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
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
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                },
                breakpoint: 325,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
                
            ]
        }
    return(
        <>
        { loading ? (
             <div className="progress"><CircularProgress /></div>
            ):(
                <>
                <LatestNews title={latest.title} image={latest.image} creator={latest.creator} createdAt={latest.createdAt} />
                <section className="py-5 news" id="news">
                    <div className="container">
                    <Slider {...settings}>
                        {data.slice(1).map((news)=>(
                            <News key={news._id} news={news} />
                        ))}
                    </Slider>
                    </div>
                </section>
            </>
            )}
            
        </>
    )
}

export default ListNews