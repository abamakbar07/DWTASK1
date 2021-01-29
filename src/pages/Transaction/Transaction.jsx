import React from 'react'
import logo from '../../img/logo.png'
import profile from '../../img/profile.png'
import { Navbar, Table } from 'react-bootstrap'

function Transaction() {
   return (
      <div className="Transaction">
         <div className="container-fluid">
            <Navbar className="justify-content-between">
               <img src={logo} width="105px" />
               <img src={profile} width="50px" />
            </Navbar>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="Transaction-title text-left mb-5">Incoming Transaction</h1>
                  <Table striped bordered hover>
                     <thead>
                        <tr className="text-danger">
                           <th>No</th>
                           <th>Users</th>
                           <th>Bukti Transfer</th>
                           <th>Remaining Active</th>
                           <th>Status User</th>
                           <th>Status Payment</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>1</td>
                           <td>Mark</td>
                           <td>Otto</td>
                           <td>@mdo</td>
                        </tr>
                        <tr>
                           <td>2</td>
                           <td>Jacob</td>
                           <td>Thornton</td>
                           <td>@fat</td>
                        </tr>
                        <tr>
                           <td>3</td>
                           <td colSpan="2">Larry the Bird</td>
                           <td>@twitter</td>
                        </tr>
                     </tbody>
                  </Table>
               </div>
            </div>

         </div>
      </div>
   )
}

export default Transaction
