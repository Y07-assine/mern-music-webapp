import React from 'react'
import './App.css'
import Header from './components/Header'
import ListNews from './components/ListNews'
import Quote from './components/Quote'
import Album from './components/api/Album'
import Playlist from './components/api/Playlist'
import VideoClipsList from './components/VideoClipList'

const Home = ()=>{
    return(
        <>
            <Header />
            <ListNews />
            <Quote />
            <Album />
            <Playlist />
            <VideoClipsList />
        </>
    )
}

export default Home