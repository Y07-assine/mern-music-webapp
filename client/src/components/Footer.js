import React from 'react'

const Footer =()=>{
    return(
        <footer class="footer">
        <div class="contianer">
                <div className="row">
                <div class=" col-sm-4">
                    <img src='/images/logo.png' className="logo" />
                </div>
                <div class="col-sm-4">
                    <h3>About Apollo Music</h3>
                    <p className="about">Apollo for Music is Is Dedicated To Bringing The News Of Moroccan Rap To A Wide Audience Without Bias Or A benefit Agenda.</p>
                    
                </div>
                <div className="col-sm-4">
                    <div className="socialMedia">
                        <img src="/images/fb-icon.png" alt="Facebook" />
                        <img src="/images/ig-icon.png" alt="Instagram" />
                        <img src="/images/twitter-icon.png" alt="Twitter" />
                    </div>
                    <span>Contact Us: apollomusic@gmail.com</span>
                </div>
                </div>
                         
        </div>
    </footer>
    )
}

export default Footer