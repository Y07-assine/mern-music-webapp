import React, {useState,useEffect} from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'


const Youtubeclip = (videoId)=>{
    console.log(videoId)
    return <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} />
}

export default Youtubeclip