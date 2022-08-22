import React from 'react'

const Newsitem=(props)=>{ 

    let  {title,description,imgurl,url,author,dateofnews,source}=props;
    return (
        <>
                   
        <div className="card" style={{width:"18rem"}}>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                <img src={imgurl} className="card-img-top news-img" alt="..."/>
                <div className="card-body">
                    
                    <h5 className="card-title">{title}...
                    
                    </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on <br />{new Date(dateofnews).toGMTString()}</small></p>
                    <a href={url} rel="noreferrer" target="_blank" className='btn btn-sm btn-secondary'>Read More</a>
                </div>
        </div>
        
        </>
    )
}

export default Newsitem