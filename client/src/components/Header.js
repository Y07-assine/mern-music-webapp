import React,{useState,useEffect} from 'react';
import Icon from './Icon';
import { useAuth } from './contexts/UserContext';
import decode from 'jwt-decode';



 const Header = () => {
     const [click,setClick]= useState(false);
     const handleClick = ()=>{
         setClick(!click);
     }
     const pathname=window.location.pathname;
     const user = JSON.parse(localStorage.getItem('profile'));
     const {signin,signout} = useAuth();
     const handleAuth=()=>{
        if(user){
            signout();
        }else{
            window.location.replace('/admin/auth');
        }
     }
     useEffect(() => {
         if(pathname.split('/')[1]==='admin'){
            const token = user?.token;
            if(token){
                const decodeToken = decode(token);
                if(decodeToken.exp * 1000 < new Date().getTime()) signout();
            }
         }
         
     }, [])
    return (
        <header className="header">
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
                            {pathname.split('/')[1]==='admin' && <button onClick={handleAuth}>{user ? 'Logout' :'SignIn'}</button>}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </header>
    )
}

export default Header