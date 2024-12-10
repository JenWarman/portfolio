import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookClubPrototype from "./BookClubPrototype";
import BookClubWireFrame from "./BookClubWireFrame";

export default function BookClubTabs() {
  const [selectedTab, setSelectedTab] = useState();
  const [isSelected, setIsSelected] = useState(false);

  function handleClick(event) {
    setSelectedTab(event.target.value);
    setIsSelected(true)
  }

  return (
    <Container className='book-club-tabs-container' fluid>
    <Row className='text-center book-club-tab-row'> 
   <Col xs={6} md={2}>
   <button className='book-club-tab-button' value='wireframes' onClick={(handleClick)}>Wireframes</button>
   </Col> 
   <Col xs={6} md={1}>
   <button className='book-club-tab-button' value='prototype' onClick={handleClick}>Prototype</button>
   </Col>
    </Row> 
    {isSelected && selectedTab === 'prototype' ? <BookClubPrototype/> : <BookClubWireFrame/>}
    </Container>
  );
}
