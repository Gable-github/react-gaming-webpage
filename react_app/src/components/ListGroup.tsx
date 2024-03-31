function ListGroup() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  // remember to wrap the items.map(item) in curly braces as its not html
  items = [];
  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
