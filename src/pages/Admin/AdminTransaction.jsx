import React from 'react'
import AdminNavbar from './AdminNavbar';

import { Navbar, Table } from 'react-bootstrap'

function Transaction() {
   return (
      <div className="Transaction">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="Admin-title text-left mb-5">Incoming Transaction</h1>
                  <Table striped borderless hover className="bg-transparent">
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
                           <td>Radif Ganteng</td>
                           <td>bca.jpg</td>
                           <td>26 / Hari</td>
                           <td>Active</td>
                           <td>Approve</td>
                           <td>V</td>
                        </tr>
                        <tr>
                           <td>1</td>
                           <td>Radif Ganteng</td>
                           <td>bca.jpg</td>
                           <td>26 / Hari</td>
                           <td>Active</td>
                           <td>Approve</td>
                           <td>V</td>
                        </tr>
                        <tr>
                           <td>1</td>
                           <td>Radif Ganteng</td>
                           <td>bca.jpg</td>
                           <td>26 / Hari</td>
                           <td>Active</td>
                           <td>Approve</td>
                           <td>V</td>
                        </tr>
                        <tr>
                           <td>1</td>
                           <td>Radif Ganteng</td>
                           <td>bca.jpg</td>
                           <td>26 / Hari</td>
                           <td>Active</td>
                           <td>Approve</td>
                           <td>V</td>
                        </tr>
                        <tr>
                           <td>1</td>
                           <td>Radif Ganteng</td>
                           <td>bca.jpg</td>
                           <td>26 / Hari</td>
                           <td>Active</td>
                           <td>Approve</td>
                           <td>V</td>
                        </tr>
                        <tr>
                           <td>1</td>
                           <td>Radif Ganteng</td>
                           <td>bca.jpg</td>
                           <td>26 / Hari</td>
                           <td>Active</td>
                           <td>Approve</td>
                           <td>V</td>
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
