import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Youtube from 'react-youtube'

const Youtubeclips = (videoId)=>{
    const opts = {
        height: '200',
        width: '90%',
        playerVars: {
          autoplay: -1,
        },
      };
    const videoOnReady=(event)=>{
        event.target.pauseVideo()
    }
    return <Youtube videoId={videoId} opts={opts} onReady={videoOnReady} />
}

export default Youtubeclips