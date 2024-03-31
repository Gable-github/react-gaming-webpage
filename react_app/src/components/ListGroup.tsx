import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  // remember to wrap the items.map(item) in curly braces as its not html
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" onClick={handleClick} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
