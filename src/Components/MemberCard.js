import React from 'react'
import '../css/MemberCard.scss';
import Logo from '../images/LogoBack.jpeg'

function MemberCard({infor}) {
    return (
      <div>
      <div class="card">
      <div class="front"style={{backgroundImage:`url(${infor.photo})`,borderColor:`${infor.bcol}`,borderOpa :`${infor.opacity}`}}>
          {/* <img src={infor.photo} alt="" /> */}
      </div>
      <div class="back">
          <div class="back-content middle">
              <h2>{infor.name}</h2>
          <span>{infor.about}</span>
          <div class="sn">
              <a id={`${infor.dispi}`} href={`https://www.instagram.com/${infor.INSTAGRAM}`} target="_blank"><i class="fab fa-instagram"></i></a>

              <a id={`${infor.displ}`}  href={`${infor.LINKEDIN}`} target="_blank"><i class="fab fa-linkedin-in"></i></a>

              
          </div>
          </div>
      </div>
  </div>
  </div>
    )
}

export default MemberCard