import React from 'react'
import logo from './../img/logo.png'
import profile from './../img/profile.png'

import { Navbar } from 'react-bootstrap'

function AdminNavbar() {
   return (
      <div className="AdminNavbar">
         <div className="container-fluid" style={{
            position: "fixed"
         }}>
            <Navbar className="justify-content-between bg-transparent pt-3">
               <img src={logo} width="105px" style={{transform: "rotate(-15deg)"}} />
               <img src={profile} width="50px" />
            </Navbar>
         </div>
         
      </div>
   )
}

export default AdminNavbar
