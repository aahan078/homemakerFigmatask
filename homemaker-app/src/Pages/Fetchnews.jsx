import React, { useEffect, useState } from 'react'



import  axios  from 'axios';
import { Link } from 'react-router-dom';

const Fetchnews = () => {
    const [Data,setData] =useState("");
    const fetchData = async()=>{
        await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=44b1232dc0d145cab74805d8d0c82c9d").then((res)=>setData(res.data.articles)); 
    };
   useEffect(()=>{
    fetchData();
   },[]);
  return (
    <div className='container my-4'>
        <h3>Top Headlines</h3>
        <div className='container d-flex justify-content-center align-items-center flex-column my-3'>{Data ? Data.map((item,index)=>(
            <>
            <div className='container my-3 ' style={{width:"500px"}}>
                <h5  >{item.title}</h5>
               
                <img src={item.urlToImage} alt='img' className='img-fluid'
                style={{width:"100%",
                height:"400px",
                objectFit:"cover"
            
            }}
                />

<p>{item.content}</p>
<Link to={item.url} target='blank'>View More</Link>
            </div>
            </>
        )):"Loading..."}</div>
        </div>
  )
}

export default Fetchnews