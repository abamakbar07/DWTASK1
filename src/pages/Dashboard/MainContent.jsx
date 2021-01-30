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
                  <h4 className="MainContent-subTitle text-left m-3 font-weight-bold">List Book</h4>
                  <div className="row m-3">
                     <ListBooks />
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}

export default MainContent
