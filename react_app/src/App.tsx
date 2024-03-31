import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      {showAlert && (
        <Alert onClick={() => setShowAlert(false)}>Button was clicked</Alert>
      )}
      <Button color="primary" onClick={() => setShowAlert(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;
