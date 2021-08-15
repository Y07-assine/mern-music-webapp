import React from 'react'
import './App.css'
import Header from './components/Header'
import ListNews from './components/ListNews'
import Quote from './components/Quote'

const Home = ()=>{
    return(
        <>
            <Header />
            <ListNews />
            <Quote />
        </>
    )
}

export default Home