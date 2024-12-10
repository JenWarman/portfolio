import { useState } from "react";
import { Button } from "react-bootstrap";
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
    <section>
    <Button value='wireframes' onClick={(handleClick)}>Wireframes</Button>
    <Button value='prototype' onClick={handleClick}>Prototype</Button>
    {isSelected && selectedTab === 'prototype' ? <BookClubPrototype/> : <BookClubWireFrame/>}
    </section>
  );
}
