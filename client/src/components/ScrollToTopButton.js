import React,{useEffect} from 'react';
import Icon from './Icon';

const ScrollToTopButton = ()=>{
    useEffect(()=>{
        const toTop= document.querySelector(".scroll_top");
        window.addEventListener("scroll",()=>{
            if(window.pageYOffset >100){
                toTop.classList.add("active");
            }else{
                toTop.classList.remove("active");
            }
        })
    });
        const handleClick=()=>{
            window.scrollTo(0, 0);
        }
    return(
        <button className="scroll_top" onClick={handleClick}>
                <Icon name='arrow-up' size={25}  />
        </button>
    )
}
export default ScrollToTopButton