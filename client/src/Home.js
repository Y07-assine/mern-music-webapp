import React from 'react'
import './App.css'
import HomeHeader from './components/HomeHeader'
import ListNews from './components/ListNews'
import Quote from './components/Quote'
import Album from './components/api/Album'
import Playlist from './components/api/Playlist'
import VideoClipsList from './components/VideoClipList'

const Home = ()=>{
    return(
        <>
            <HomeHeader />
            <ListNews />
            <Quote />
            <Album />
            <Playlist />
            <VideoClipsList />
            
        </>
    )
}

export default Home