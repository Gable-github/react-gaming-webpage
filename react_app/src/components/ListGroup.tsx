function ListGroup() {
  const items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  // remember to wrap the items.map(item) in curly braces as its not html
  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
