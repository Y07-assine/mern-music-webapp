import React,{useState,useEffect} from 'react';
import Header from '../Header';
import axios from 'axios';
import {createQuoteURL} from '../../constant';

const AddQuote = ()=>{
    const [postData,setPostData] = useState({quote:'',author:''});
    const headers = {
        'Authorization':`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    };
    const handleSubmit=(e)=>{
    axios.post(createQuoteURL,postData,{headers})
        .then(res=>alert('News is successfully added !'))
        .catch(err=>alert(err));
    }
    return(
        <>
            <Header />
            <div className="container">
                <div className="form">
                <form onSubmit={handleSubmit}>
                    <label>New Quote</label>
                    <input name="quote" type="text" placeholder="quote" onChange={(e)=> setPostData({...postData,quote:e.target.value})} /><br />
                    <label>Author</label>
                    <input name="author" type="text" placeholder="Author" onChange={(e)=> setPostData({...postData,author:e.target.value})} /><br/>
                    <input type="submit" value="Submit" />
                </form>
                </div>           
            </div>
        </>
    )
}

export default AddQuote