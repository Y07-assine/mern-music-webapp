import React,{useState} from 'react';
import Icon from './Icon';
import {animateScroll as scroll, Link} from 'react-scroll';
import { Dropdown} from 'semantic-ui-react';


 const HomeHeader = () => {
     const [click,setClick]= useState(false);
     const handleClick = ()=>{
         setClick(!click);
     }
     const toggleHome=()=>{
        scroll.scrollToTop();
    }
    return (
        <header className="header" style={{ background:`url("/images/headerx.jpg")` }} >
            <div className="container nav">
                <div className="navContainer">
                    <div onClick={toggleHome}><img src='/images/logo.png' alt="apollo for music" width={200} height={100} /></div>
                    <div className="nav__hamburger " onClick={handleClick} >
                        <Icon name={click ? 'cross' :'menu'} size={35} />
                    </div>
                    <div className={click ? 'nav-menu-show open' :'nav-menu-show'}>
                        <div className="menu">
                            <ul className="nav__list">
                                <li className="nav__item"><Link to="news" activeClass="active" spy={true} smooth={true} offset={-200} duration={500} >NEWS</Link></li>
                                <li className="nav__item"><Link to="albums" activeClass="active" spy={true} smooth={true} offset={-200}  duration={500}  >ALBUMS</Link></li>
                                <li className="nav__item"><Link to="playlist" activeClass="active" spy={true} smooth={true} offset={-200}  duration={500}  >PLAYLIST</Link></li>
                                <li className="nav__item"><Link to="clips" activeClass="active" spy={true} smooth={true} offset={-200} duration={500} >VIDEOS CLIP</Link></li>
                            </ul>
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

export default HomeHeader