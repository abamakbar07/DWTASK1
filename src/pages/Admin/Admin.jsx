import React from 'react'
import AdminNavbar from '../../comp/AdminNavbar'
import AdminTransaction from './AdminTransaction'
import AdminAddBook from './AdminAddBook'

function Admin() {
   return (
      <div className="Admin">
         <AdminNavbar />
            <AdminTransaction />
            <AdminAddBook />
         
      </div>
   )
}

export default Admin
