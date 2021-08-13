import React from 'react';


const News = ({news}) => {
    const {title,image} = news
    return (
        <div>
            <div className="content__news">
                <a href="#">
                    <h2 className="text__news font-rale">{title}</h2>
                </a> 
            </div>
            <div className="details__news">
                <img src={image} alt="news" width={550} height={600} />
            </div>
        </div>
    )
}

export default News;