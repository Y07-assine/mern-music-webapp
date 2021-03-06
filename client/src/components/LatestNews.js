import React from 'react';


const LatestNews = ({title,image,creator,createdAt}) => {
   return (
       <section className=" news">
           <div className="containerSection">
               <div className="row ">
                   <div className="col-sm-4">
                       <div className="lgfgYE">
                           <span className="title">News</span>
                       </div>
                       <a href="#"><h2 className="text__news font-rale">{title}</h2></a> 
                   </div>
                   <div className="col-sm-8 item-news">
                       <img src={'/images/'+image} alt="latest news" height={300} width={900} className="latest-news__img"/>
                   </div>
               </div>
           </div>
       </section>
   )
}

export default LatestNews