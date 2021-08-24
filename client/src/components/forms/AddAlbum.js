import React,{useState,useEffect} from 'react';
import Header from '../Header';
import axios from 'axios';
import {createAlbumURL} from '../../constant';

const AddAlbum = ()=>{
    const [postData,setPostData] = useState({name:'',albumId:''});
    const headers = {
        'Authorization':`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    };
    const handleSubmit=(e)=>{
    axios.post(createAlbumURL,postData,{headers})
        .then(res=>alert('News is successfully added !'))
        .catch(err=>alert(err));
    }
    return(
        <>
            <Header />
            <div className="container">
                <div className="form">
                <form onSubmit={handleSubmit}>
                    <label>New Album</label>
                    <input name="name" type="text" placeholder="name" onChange={(e)=> setPostData({...postData,name:e.target.value})} /><br />
                    <label>Author</label>
                    <input name="albumId" type="text" placeholder="Album ID" onChange={(e)=> setPostData({...postData,albumId:e.target.value})} /><br/>
                    <input type="submit" value="Submit" />
                </form>
                </div>           
            </div>
        </>
    )
}

export default AddAlbum