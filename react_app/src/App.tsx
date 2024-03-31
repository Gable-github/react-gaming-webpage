import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

const handleOnClick = () => console.log("Clicked");

function App() {
  return (
    <div>
      <Alert>Button was clicked</Alert>
      <Button color="primary" onClick={handleOnClick}>
        My button
      </Button>
    </div>
  );
}

export default App;
