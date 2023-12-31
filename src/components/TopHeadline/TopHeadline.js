import React, { useEffect, useState } from 'react';

const TopHeadline = () => {
  const [articles,setArticle]=useState([]);
  useEffect(()=>{
 const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=0d08dc7787d24e62a5861bdb7c5842b8'
     fetch(url)
     .then(res=>res.json())
     .then(data =>setArticle(data.articles))
  },[])
  return (
    <div>
      <h1>Top Headline:{articles.length}</h1>
    </div>
  );
};

export default TopHeadline;