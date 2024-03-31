import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";

const handleOnClick = () => console.log("hi");

function App() {
  return (
    <div>
      <Button onClick={handleOnClick}>My Button</Button>
    </div>
  );
}

export default App;
