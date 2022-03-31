import React from 'react'
// import Sarthak from "./Sarthak.png";
// import { FaLinkedin,FaInstagram } from "react-icons/fa";
import '../css/Car.scss'
function Card({h}) {
  return (
<>
    
  <div class="container">
  <div class="card card0">
    <div class="border">
      <h2 style={{color:"white"}}>Rahul Bhatiya</h2>
      <div class="icons">
        <i class="fa fa-codepen" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-dribbble" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  </div>
</>
   
  )
}

export default Card