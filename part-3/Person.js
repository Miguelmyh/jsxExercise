const Person = (props) => {
  let response;
  let li = props.hobbies.map((h) => <li>{h}</li>);
  if (props.age > 18) {
    response = "please go vote!";
  } else {
    response = "you must be 18";
  }
  return (
    <div>
      <p>Learn some information about this person</p>
      <ul>
        <li>Name: {props.name}</li>
        <li>Age: {props.age}</li>
      </ul>
      Hobbies:
      <ul>{li}</ul>
      <h3>{response}</h3>
    </div>
  );
};
