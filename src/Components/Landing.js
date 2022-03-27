import React,{useRef,useEffect} from 'react'
import '../css/Landing.scss'
import {gsap} from 'gsap'
// import Robot from "../images/AB.svg"
import Loader from './Loader'
import {NavLink} from 'react-router-dom';
// import Particles from 'react-particles-js';

function Landing() {
    useEffect(() => {      
        gsap.from('.hero1', {y:500, ease:"elastic", duration: 4})
        gsap.to('.hero1', {y:0, ease:"elastic", duration: 4})
        gsap.from('.hero3', {y:1000, ease:"elastic", duration: 3})
        gsap.to('.hero3', {y:0, ease:"elastic", duration: 3})
        
    }, []);
   
    return (

        
           
        <div className="one">
            <div class="container-fluid">
                <div class="row">
                    <div className="col-md-4 Hero">
                        <div class="row">
                      
                        {/* <Particles /> */}
                            <h1 className="col-md-12 text-center  hero1">Team Meta Morph<span id="hero2"> Facilitating.</span>.</h1>
                            <p className="col-md-12 text-center hero3">Technology Beyond Science</p>
                            <NavLink className="gallery" to="/Projects" style={{fontWeight:"bold"}}>Exhibitions</NavLink>
                        </div>
                    </div>
                    <div className="col-md-8 Robot">
                        {/* <object type="image/svg+xml" data={Robot} className="Robo"></object> */}
                    </div>
                </div>
            </div>
        </div>
       
    )
}
export default Landing