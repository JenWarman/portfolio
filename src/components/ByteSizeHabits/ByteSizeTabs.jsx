import { useState } from "react";
import ByteSizeWireFrames from "./ByteSizeWireFrames";
import ByteSizeHabitsDemo from "./ByteSizeHabitsDemo";
import { Container, Col } from "react-bootstrap";

export default function ByteSizeHabitsTabs() {
  const [selectedTab, setSelectedTab] = useState("wireframes");

  function handleClick(event) {
    setSelectedTab(event.target.value);
  }

  let content;

  if (selectedTab === "wireframes") {
    content = <ByteSizeWireFrames />;
  }
  if (selectedTab === "demo") {
    content = <ByteSizeHabitsDemo />;
  }
  if (selectedTab === "github") {
    window.location.href = "https://github.com/DannyGreenan/byte-size-habits";
  }
  
  return (
    <Container className="tabs" center>
      <Col>
        <button
          value="wireframes"
          onClick={handleClick}
          className={`book-club-tab-button ${
            selectedTab == "wireframes" ? "active " : ""
          }`}
        >
          Wireframes
        </button>

        <button
          className={`book-club-tab-button ${
            selectedTab == "demo" ? "active " : ""
          }`}
          value="demo"
          onClick={handleClick}
        >
          Demo
        </button>

        <button
         className={`book-club-tab-button ${
          selectedTab == "github" ? "active " : ""
        }`}
          value="github"
          onClick={handleClick}
        >
          Github
        </button>
      </Col>
      {content}
    </Container>
  );
}
