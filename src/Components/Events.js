import React from 'react'
import '../css/Events.scss'
import InfoCard from './InfoCard'
import Data from '../dataAll/Data.json'
function Events() {

    
    const personList= Data.map(info=> <div className="col-md-12"><InfoCard info={info} />  </div>)
    return (
        <div className="eventCard">
            <h1 id="ttl">Awesome Events this Year</h1>
           <div className="container">
               <div className="row">
                        {personList}
               </div>
           </div>
        </div>
    )
}
export default Events