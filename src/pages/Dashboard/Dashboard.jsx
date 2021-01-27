import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
   return (
      <div className="Dashboard pt-3 pb-3">
         <Container fluid>
            <Row className="Dashboard-row">
               <Col className="Dashboard-comp profile" md={3}>
                  <Card body className="bg-transparent">
                     <div className="container">
                        <div className="Dashboard-comp-profile">
                           <Card.Img src="https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png" style={{width: "50px"}} />
                        </div>
                        <div className="Dashboard-comp-profile">
                           <Card.Img className="rounded-circle mt-3" src="https://i.pinimg.com/originals/32/7d/46/327d46d0a938e18c91af4a7c97373c7d.jpg" style={{width: "100px"}} />
                        </div>
                        <h4 className="font-weight-bold mt-3">Pak Habibie</h4>
                        <h6 className="mt-3 text-danger">Not Subscribed Yet</h6>

                        <div className="pt-5">
                             <div class="form-group text-right">
                                 <FontAwesomeIcon icon={['fad', 'coffee']} />
                                 <h4>Profile</h4>
                           </div>
                        </div>

                     </div>
                  </Card>
               </Col>

               <Col className="Dashboard-comp-hiden" md={3}></Col>
               <Col className="Dashboard-comp" md={9}>
                  <Card className="Dashboard-comp-content bg-transparent" body>

                  </Card>
               </Col>
            </Row>
         </Container>
         
      </div>
   )
}

export default Dashboard
