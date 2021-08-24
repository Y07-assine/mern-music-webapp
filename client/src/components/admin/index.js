import React from 'react';
import ListNews from './ListNews';
import Header from '../Header';
import ListAlbum from './ListAlbum';
import ListQuote from './ListQuote';
import ListVideoClip from './ListVideoClip';
const Admin = ()=>{
    return(
        <>
        <Header />
        <ListNews />
        <ListAlbum />
        <ListQuote />
        <ListVideoClip/>
        </>
    )
}

export default Admin;