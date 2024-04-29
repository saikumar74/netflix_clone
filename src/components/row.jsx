import {useState,useEffect} from 'react'
import axios from 'axios';

import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

//Base urls
const Base_url='https://api.themoviedb.org/3'
const Base_ImgUrl='https://image.tmdb.org/t/p/original/'


  
const Row = ({title,fetchUrl}) => {
  const[movie,setMovie]=useState([])
  const[isScroll,setIsScroll]=useState(0)
  useEffect(()=>{
    //fetching the movie data
    const Fetchdata= async()=>{
      try {
        const response = await axios.get(`${Base_url}${fetchUrl}`);
        console.log(response);
        setMovie(response.data.results)
      } catch (error) {
        console.error(error);
      }
    }
    Fetchdata();

    return ()=>{}
  },[fetchUrl])

const handleScrollright=()=>{
  setIsScroll(previousState=>previousState+200)
}

const handleScrollleft=()=>{
  setIsScroll(previousState=>previousState-200)
}

  return (
    <div className='container-fluid bg-dark'>
       <h1 className='fw-bold text-white'>{title}</h1>
        <div className="row align-items-center">
          <div className="col-auto">
            <button className='transparent' onClick={handleScrollleft}><ArrowBackIosOutlinedIcon className='arrowleft'/></button>
          </div>
          <div className="col" style={{overflow:'hidden'}}>
            <div className="d-flex" style={{transform:`translateX(-${isScroll}px)`, transition:'transform  .3s linear'}}>
              {movie && movie.map((items,i)=>{
                return (
                  <img src={`${Base_ImgUrl}${items.poster_path}`} alt="" key={i} style={{width:'16vw',cursor:'pointer'}} className='img-st mx-1'/>
                )
              })}
            </div>
          </div>
          <div className="col-auto">
            <button className='transparent' onClick={handleScrollright}><ArrowForwardIosOutlinedIcon className='arrowright'/></button>
          </div>
        </div>
       
    </div>
  )
}

export default Row
