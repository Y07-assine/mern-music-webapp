import React,{useState,useEffect} from 'react';
import Header from '../Header';
import axios from 'axios';
import {createVideoClipURL} from '../../constant';

const AddVideoClip = ()=>{
    const [postData,setPostData] = useState({name:'',youtubeId:''});
    const handleSubmit=(e)=>{
    axios.post(createVideoClipURL,postData)
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
                    <label>Youtube Id</label>
                    <input name="youtubeId" type="text" placeholder="Youtube ID" onChange={(e)=> setPostData({...postData,youtubeId:e.target.value})} /><br/>
                    <input type="submit" value="Submit" />
                </form>
                </div>           
            </div>
        </>
    )
}

export default AddVideoClip