import React from 'react'
import SideMenu from './SideMenu'
import MainContent from './MainContent'
import Subscribe from './Subscribe'
import Profile from './Profile';
import BookDetail from './BookDetail';

import { Container, Row, Col, Card } from 'react-bootstrap';

function Dashboard() {
   return (
      <div className="Dashboard pt-3 pb-3">
         <Container fluid>
            <Row className="Dashboard-row">
               <Col className="Dashboard-comp Dashboard-comp-card profile" md={3}>
                  <Card body className="bg-transparent border-0">
                     <SideMenu />
                  </Card>
               </Col>

               <Col className="Dashboard-comp-hiden" md={3}></Col>
               <Col className="Dashboard-comp Dashboard-comp-card" md={9}>
                  <Card className="Dashboard-comp-content bg-transparent border-0" body>
                     <MainContent />
                     <Subscribe />
                     <Profile />
                     <BookDetail />
                  </Card>
               </Col>
            </Row>
         </Container>
         
      </div>
   )
}

export default Dashboard
