import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import News from './News';
import LatestNews from './LatestNews';
import { newsListURL } from '../constant';
import { Loader } from 'semantic-ui-react';


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
                console.log(res.data);
                setLatest(res.data[0])
                setLoading(false);
            })
            .catch(err=>{
                setError(err);
                setLoading(false);
            });
        },[]);
    return(
        <>
        { !loading && (
            <Loader active inline='centered' />
        )}
            <LatestNews title={latest.title} image={latest.image} creator={latest.creator} createdAt={latest.createdAt} />
            <section className="py-5 news" id="news">
                <div className="row grid-container">
                    {data.slice(1).map((news)=>(
                        <News key={news._id} news={news} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default ListNews