import React from 'react';
import Icon from './Icon';

const ScrollToTopButton = ()=>{

    return(
        <button className="scroll_top">
            <div >
                <Icon name='icon-arrow-up' size={35} color='white' />
            </div>
        </button>
    )
}
export default ScrollToTopButton