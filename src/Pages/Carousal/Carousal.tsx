import React, { useEffect, useState } from 'react'
import Container from '../../ui/Container/Container'

export const Carousal = () => {
 const [caro,setCaro]=useState<{id:string,image_url:string}[]>([])
  useEffect(()=>{
    fetch('http://localhost:4200/carousal')
    .then(res=>res.json())
    .then(data=>setCaro(data))
  },[])
  return (
    <Container>
     

<div className="carousel w-full space-y-4 mt-10">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={caro[0]?.image_url} className="w-full" />

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={caro[1]?.image_url} className="w-full" />

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={caro[2]?.image_url} className="w-full" />

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img src={caro[3]?.image_url} className="w-full" />

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  

      
    



    </Container>
  )
}
