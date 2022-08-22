import React, { useEffect,useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Newsitem from './Newsitem'

import Spinner from './Spinner';


const News=(props)=> {
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);


// capitalizeFirstLetter=(string)=>{
//   return string.charAt(0).toUpperCase()+string.slice(1);
// }

const updateNews=async ()=>{
  props.setProgress(10);
  const urlapi=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;

  setLoading(true)
  
  let data=await fetch(urlapi);
  let parsedData=await data.json();

  setArticles(parsedData.articles)

  setTotalResults(parsedData.totalResults)
  setLoading(false)
 
  props.setProgress(100);

}

    // this will work after render method  
    useEffect(() => {
  document.title=`${props.category}-News Nation| 24x7`;
      updateNews();    
    }, [])

    
  

    const fetchMoreData =async ()=>{
          setPage(page+1)

            const urlapi=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
    
            let data=await fetch(urlapi);
            let parsedData=await data.json();
      
            setArticles( articles.concat(parsedData.articles))

            setTotalResults( parsedData.totalResults)
            setLoading(false)
          

    }

    // returning jsx 
    return (
      <>
          <h2 className='container' style={{marginTop:'90px'}}>News Nation Top Headlines on {props.category}</h2>
       

          {/* for loading spinner  */}
          {loading && <Spinner/>}

         <InfiniteScroll 
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
          >
         <div className="container">
          <div className="row my-4">

          {/* {!loading && articles.map((element)=>{  */}

            {articles.map((element)=>{
                    return(
                        <div className="col-md-4 my-3"  key={element.url}>
                            <Newsitem  title={element.title?element.title.slice(0,45):"No title Available we will respon soon"} description={element.description?element.description.slice(0,88):"No News Available. we will respond soon"} imgurl={element.urlToImage?element.urlToImage:"https://images.indianexpress.com/2022/05/Untitled-design-23-1.jpg"} url={element.url} author={element.author} dateofnews={element.publishedAt} source={element.source.name}/>
                        </div>)
                })}
           </div>
          </div>
          </InfiniteScroll>

     
      </>
    )
}
News.defaultProps={
  country:"in",
  pagesize:12,
  category:'general'
}


export default News