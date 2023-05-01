import React, { useEffect, useState } from 'react'



import  axios  from 'axios';
import { Link } from 'react-router-dom';
import '../Pages/fetchnews.css'
import Newsnavbar from './Newsnavbar';
import Newsfooter from './Newsfooter';

const Fetchnews = ({cat}) => {
    const [Data,setData] =useState("");
    const fetchData = async()=>{
        await axios.get(
            cat? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=44b1232dc0d145cab74805d8d0c82c9d`:
            "https://newsapi.org/v2/top-headlines?country=in&apiKey=44b1232dc0d145cab74805d8d0c82c9d").then((res)=>setData(res.data.articles)); 
    };
   useEffect(()=>{
    fetchData();
   },[{cat}]);
  return (
    <>

    <Newsnavbar/>

    
    
    <div className='container-fluid my-4'>
    <div className='container-fluid  text-dark d-flex justify-content-center flex-column align-items-center' style={{height:"20vh"}} >
        <h2 style={{fontSize:"50px",color:"orange"}}>News Blogs App </h2>
        <h3>Website build using NewsAPI</h3>
    </div>
        <h1 className='text-center' > <u>Top Headlines</u> </h1>
        <div className='container d-flex justify-content-center align-items-center flex-column my-3 main-news-box' >{Data ? Data.map((item,index)=>(
            <>
            <div className='container mt-5 p-5 newsdata-box' style={{width:"100%",
        
        }}>
                <h5>{item.title}</h5>
               
                <img src={item.urlToImage} alt='img' className='img-fluid mt-3'
                style={{width:"100%",
                height:"auto",
                objectFit:"cover"
            
            }}
                />

<p className='mt-3' >{item.content}</p>
<Link to={item.url} target='blank'>View More</Link>
            </div>
            </>
        )):"Loading..."}</div>
        </div>
        <Newsfooter/>
        </>
  )
}

export default Fetchnews