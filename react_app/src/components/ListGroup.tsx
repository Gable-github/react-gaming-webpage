function ListGroup() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  // remember to wrap the items.map(item) in curly braces as its not html

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            onClick={() => console.log(item, index)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
