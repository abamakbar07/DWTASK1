import React from 'react'
import wow from './../../img/wow.png'

import { Card, Form, Button } from 'react-bootstrap';

function Subscribe() {
   return (
      <div className="Subscribe">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <Card className="Subscribe-card border-0 bg-transparent">
                     <Card.Body className="Subscribe-body">
                        <div>
                           <h1>Premium</h1>
                           <p>Pay now and access all the latest books from <img src={wow} /></p>
                           <p className="font-weight-bold"><img src={wow} />: 0981312323</p>
                              <Form>
                                 <Form.Group>
                                 <Form.Control type="id" placeholder="Input your account number" />
                                 </Form.Group>

                                 <Form.File className="Subscribe-form-file text-left"
                                    id="custom-file-translate-scss"
                                    label="Attache proof of transfer"
                                    lang="en"
                                    custom
                                 />

                                 <Form.Group className="submit-button mt-5">
                                 <Button className="mt-2" variant="danger" type="submit">
                                    Send
                                 </Button>
                                 </Form.Group>
           
                              </Form>
                        </div>
                     </Card.Body>
                  </Card>
               </div>
            </div>

         </div>
      </div>
   )
}

export default Subscribe
