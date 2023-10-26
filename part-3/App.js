const App = () => (
  <div>
    <h2>Person 1</h2>
    <Person age={21} hobbies={["soccer", "videogames"]} />
    <h2>Person 2</h2>
    <Person age={17} hobbies={["reading", "cooking"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
