import { useState } from "react";
import { Button } from "react-bootstrap";
import BookClubPrototype from "./BookClubPrototype";
import BookClubWireFrame from "./BookClubWireFrame";

export default function BookClubTabs() {
  const [selectedTab, setSelectedTab] = useState();

  function handleClick(event) {
    console.log(event.target.value);
  }

  return (
    <section>
    <Button value='wireframes' onClick={handleClick}>Wireframes</Button>
    <Button value='prototype' onClick={handleClick}>Prototype</Button>
    </section>
  );
}
