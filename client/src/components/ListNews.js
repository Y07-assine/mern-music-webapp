import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import News from './News';
import LatestNews from './LatestNews';
import { newsListURL } from '../constant';

const ListNews = ()=>{
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [data,setData] = useState([]);

    useEffect(()=>{
        setLoading(true);
        axios
            .get(newsListURL)
            .then(res=>{
                setData(res.data);
                console.log(res.data)
                setLoading(false);
            })
            .catch(err=>{
                setError(err);
            });
        });
    return(
        <>

            <section className="py-5 news" id="news">
                <div className="row grid-container">
                    {data.slice(1).map((news)=>(
                        <News key={news.id} news={news} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default ListNews