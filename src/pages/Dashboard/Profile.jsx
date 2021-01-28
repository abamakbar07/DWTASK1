import React from 'react'
import ProfileDetail from './ProfileDetail'
import ProfileListbooks from './ProfileListbooks'

function Profile() {
   return (
      <div className="Profile">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <img className="MainContent-header" src="" />
                  <h4 className="text-left m-3 font-weight-bold" style={{fontFamily: "Times New Roman"}}>Profile</h4>
                  <div className="row">
                     <ProfileDetail />
                  </div>
                  <h4 className="text-left m-3 font-weight-bold" style={{fontFamily: "Times New Roman"}}>My List Book</h4>
                  <div className="row">
                     <ProfileListbooks />
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}

export default Profile
