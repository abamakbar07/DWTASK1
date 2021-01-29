import React from 'react'
import attach from '../../img/icon/attach2.png'
import addBook from '../../img/icon/addBook.png'

import { Form } from 'react-bootstrap'

function AdminAddBook() {
   return (
      <div className="AdminAddBook">
         <div className="container pl-5 pr-5">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="Admin-title text-left mb-5">Add Book</h1>
                  <Form.Group>
                     <Form.Control className="bgTextboxSubs" size="lg" type="text" placeholder="Title" />
                     <br />
                     <Form.Control className="bgTextboxSubs" size="lg" type="text" placeholder="Publication Date" />
                     <br />
                     <Form.Control className="bgTextboxSubs" size="lg" type="text" placeholder="Pages" />
                     <br />
                     <Form.Control className="bgTextboxSubs" size="lg" type="text" placeholder="Author" />
                     <br />
                     <Form.Control className="bgTextboxSubs" size="lg" type="text" placeholder="ISBN" />
                     <br />
                     <Form.Control className="bgTextboxSubs" className="Admin-AddBook-about" size="lg" type="text" placeholder="About This Book" />
                     <br />
                     <div className="form-group col-md-4 pl-0 pr-0">
                        <label for="fusk" className="bgTextboxAdd form-control">
                           <div className="justify-content-between row ml-1 mr-1">
                              <p className="text-left ">
                                 Attache proof of transfer
                              </p>
                              <div className="">
                                 <img src={attach} />
                              </div>
                           </div>
                        </label>
                        <input id="fusk" type="file" name="photo" style={{display:"none"}} />
                     </div>
                     <div className="row">
                        <div className="col-sm-12 text-right">
                           <button className="btn btn-dangerAdd m-1">Add Book <img className="ml-2" src={addBook} /></button>
                        </div>
                     </div>
                  </Form.Group>
               </div>
            </div>

         </div>
      </div>
   )
}

export default AdminAddBook
