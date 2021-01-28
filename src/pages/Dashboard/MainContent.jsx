import React from 'react'
import header from '../../img/headerDashboard.png'
import ListBooks from './ListBooks'

function MainContent() {
   return (
      <div className="MainContent">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <img className="MainContent-header" src={header} />
                  <h4 className="text-left m-3 font-weight-bold" style={{fontFamily: "Times New Roman"}}>List Book</h4>
                  <div className="row">
                     <ListBooks />
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}

export default MainContent
