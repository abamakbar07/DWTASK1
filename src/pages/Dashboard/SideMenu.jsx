import React from 'react'
import logo from '../../img/logo.png'
import profile from '../../img/profile.png'
import iconProfile from '../../img/icon/iconProfile.png'
import iconSubscibe from '../../img/icon/iconSubscibe.png'
import iconLogout from '../../img/icon/iconLogout.png'

import { Card } from 'react-bootstrap';

function SideMenu() {
   return (
      <div className="SideMenu container">
         <div className="Dashboard-comp-profile">
            <Card.Img src={logo} style={{width: "105px", height: "84px"}} />
         </div>
         <div className="Dashboard-comp-profile">
            <Card.Img className="rounded-circle mt-2" src={profile} style={{width: "100px"}} />
         </div>
         <h4 className="font-weight-bold mt-2">Egi Ganteng</h4>
         <h6 className="mt-2 text-danger">Not Subscribed Yet</h6>

         <hr className="Dashboard-comp-profile-line"></hr>

         <div className="pt-5 d-flex justify-content-center">
            <div class="form-group row">
               <button class="btn btn-block" style={{display: "flex"}}>
                  <img src={iconProfile} />
                  <p className="ml-2 text-secondary" >Profile</p>
               </button>
            </div>
         </div>

         <div className="d-flex justify-content-center">
            <div class="form-group row">
               <button class="btn btn-block" style={{display: "flex"}}>
                  <img src={iconSubscibe} />
                  <p className="ml-2 text-secondary" >Subscibe</p>
               </button>
            </div>
         </div>

         <hr className="Dashboard-comp-profile-line"></hr>

         <div className="pt-5 d-flex justify-content-center">
            <div class="form-group row">
               <button class="btn btn-block" style={{display: "flex"}}>
                  <img src={iconLogout} />
                  <p className="ml-2 text-secondary" >Logout</p>
               </button>
            </div>
         </div>

      </div>

   )
}

export default SideMenu
