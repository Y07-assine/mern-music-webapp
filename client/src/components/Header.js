import React,{useState,useEffect} from 'react';
import Icon from './Icon';



 const Header = () => {
     const [click,setClick]= useState(false);
     const handleClick = ()=>{
         setClick(!click);
     }
    return (
        <header className="header" style={{ background:`url("/images/headerx.jpg")` }} >
            <div className="container nav">
                <div className="navContainer">
                    <a href="/"><img src='/images/logo.png' alt="apollo for music" width={200} height={100} /></a>
                    <div className="nav__hamburger " onClick={handleClick} >
                        <Icon name={click ? 'cross' :'menu'} size={35} />
                    </div>
                    <div className={click ? 'nav-menu-show open' :'nav-menu-show'}>
                        <div className="menu">
                            <a href="#" className="item">Home</a>
                            <a href="#" className="item">News</a>
                            <a href="#" className="item">New Arrivals</a>
                            <a href="#" className="item">Support</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="description">
                <div className="content">
                    <h1>Moroccan Hip-Hop news</h1>
                    <h5>Apollo For Music is a community initiative,to highlight and share the latest Hip-Hop topics, and support the new generation.</h5>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Header