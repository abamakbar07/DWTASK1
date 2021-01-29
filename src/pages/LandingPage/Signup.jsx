import React from 'react'
import { Button, Form } from 'react-bootstrap';

function Signup() {
  return (
      <div className="card-body">
        <div className="container p-2">
          <Form>
            
            <h2 className="mb-3 text-left font-weight-bold">Sign Up</h2>

            <Form.Group controlId="formBasicEmail">
              <Form.Control className="bgTextbox" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control className="bgTextbox" type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicFullName">
              <Form.Control className="bgTextbox" type="FullName" placeholder="Full Name" />
            </Form.Group>

            <Form.Group className="submit-button">
              <Button className="mt-2" variant="danger" type="submit">
                Sign In
              </Button>
            </Form.Group>

            <Form.Text className="text-muted">
              Already have an account? Klik <a className="font-weight-bold text-dark">Here</a>
            </Form.Text>            

          </Form>
        </div>
      </div>
   )
}

export default Signup
