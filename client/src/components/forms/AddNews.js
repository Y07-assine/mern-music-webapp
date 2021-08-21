import React,{useState,useEffect} from 'react';
import { Form,Button,Card } from 'semantic-ui-react';
import Header from '../Header';
import axios from 'axios';
import {createNewsURL} from '../../constant';

const AddNews=()=>{
    const [postData,setPostData] = useState({title:'',creator:'',body:'',image:{},source:''});

    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('title',postData.title);
        formData.append('creator',postData.creator);
        formData.append('body',postData.body);
        formData.append('image',postData.image);
        formData.append('source',postData.source);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post(createNewsURL,formData,config)
            .then(res=>alert('News is successfully added !'))
            .catch(err=>alert(err));
       }
    return( 
        <>
            <Header />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label>News Title</label>
                    <input name="title" placeholder="Title" onChange={(e)=> setPostData({...postData,title:e.target.value})} /><br />
                    <label>Creator</label>
                    <input name="creator" placeholder="Creator" onChange={(e)=> setPostData({...postData,creator:e.target.value})} /><br/>
                    <label>Body</label>
                    <input name="body" placeholder="body" onChange={(e)=> setPostData({...postData,body:e.target.value})} /><br/>
                    <label>Image</label>
                    <input name="image" type="file"  onChange={(e)=> 
                                setPostData({...postData,image:e.target.files[0]})
                    } /><br/>
                    <label>Source</label>
                    <input name="source" placeholder="source" onChange={(e)=> setPostData({...postData,source:e.target.value})} /><br/>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        </>
    )
}

export default AddNews