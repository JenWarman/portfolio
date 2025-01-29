import { useState } from "react";
import ByteSizeWireFrames from "./ByteSizeWireFrames";
import ByteSizeHabitsDemo from "./ByteSizeHabitsDemo";
import { Container, Col, Row } from "react-bootstrap";

export default function ByteSizeHabitsTabs() {
  const [selectedTab, setSelectedTab] = useState();
 

  function handleClick(event) {
    setSelectedTab(event.target.value);
  
  }

  return (
    <Container className="tabs">
      <Row className="tabs-row">
        <Col xs={6} md={2}>
          <button
            className="book-club-tab-button"
            value="wireframes"
            onClick={handleClick}
          >
            Wireframes
          </button>
        </Col>
        <Col xs={6} md={1}>
          <button
            className="book-club-tab-button"
            value="demo"
            onClick={handleClick}
          >
            Demo
          </button>
        </Col>
      </Row>
      {!selectedTab && <p>Please select a tab</p>}
      {selectedTab === "demo" ? (
        <ByteSizeHabitsDemo />
      ) : (
        <ByteSizeWireFrames />
      )}
    </Container>
  );
}
