import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
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
    <Row className='book-club-tab-row'> 
   <Col >
   <button className='book-club-tab-button' value='wireframes' onClick={(handleClick)}>Wireframes</button>
   </Col> 
   <Col >
   <button className='book-club-tab-button' value='prototype' onClick={handleClick}>Prototype</button>
   </Col>
    </Row> 
    {isSelected && selectedTab === 'prototype' ? <BookClubPrototype/> : <BookClubWireFrame/>}
    </Container>
  );
}
