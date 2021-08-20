import React,{useState,useEffect} from 'react';
import { Form,Button,Card } from 'semantic-ui-react';
import Header from '../Header';
import axios from 'axios';
import {createNewsURL} from '../../constant';

const AddNews=()=>{
    const [postData,setPostData] = useState({title:'',creator:'',body:'',image:{},source:''});

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(postData.image)
        axios.post(createNewsURL,postData)
            .then(res=>alert(res.data))
            .catch(err=>{alert(err);console.log(err)});
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
                        {
                            let reader = new FileReader()
                            reader.readAsDataURL(e.target.files[0]);
                            reader.onload=(e)=>{
                                const data={file:e.target.result}
                                setPostData({...postData,image:data})
                            }
                        }
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