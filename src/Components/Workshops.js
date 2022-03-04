import React from 'react'
import '../css/Events.scss'
import '../css/Workshop.scss'
import InfoCard from './InfoCard'
import dataworkshop from '../dataAll/dataworkshop.json'
function Workshops() {

    
    const personList= dataworkshop.map(info=> <div className="col-md-12"><InfoCard info={info} />  </div>)
    return (
        <div className="eventCard">
            <h1 id="ttl">Our Workshops this Year</h1>
           <div className="container">
               <div className="row">
                        {personList}
               </div>
           </div>
        </div>
    )
}
export default Workshops