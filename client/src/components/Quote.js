import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { quoteURL } from '../constant';
import { Loader } from 'semantic-ui-react';

const Quote = () =>{

    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [data,setData] = useState([]);

    useEffect(()=>{
        setLoading(true);
        axios  
            .get(quoteURL)
            .then(res=>{
                setData(res.data[0])
                setLoading(false)
            })
            .catch(err=>{
                setError(err)
                setLoading(false)
            });
    },[]);

    return(
        <>
        { loading && (
            <Loader active inline='centered' />
        )}
        <section className="py-5 news">
            <div className="quote__section">
                <div className="quote__section-content">
                    <p>"{data.quote} "</p>
                    <p className="quote__author">{data.author}, <span className="quote__author-status">Rapper</span></p>
                </div>
                <span class="quote__section-label">PUNSHLINE OF THE DAY</span>
            </div>
        </section>
        </>
    )
}

export default Quote