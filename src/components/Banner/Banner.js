import React,{useEffect, useState} from 'react'
import { API_KEY ,imageUrl} from '../../constants/constants'
import './Banner.css'
import instance from '../../axios'

function Banner() {
  const [movie, setMovie] = useState()

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 21);
    return number;
  };
  useEffect(() => {
    instance.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
    })
  }, [])
  return (
    <div
    style={{backgroundImage: `url(${movie? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title ? movie.title : movie.name : ''}</h1>
        <div className='banner-buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner
