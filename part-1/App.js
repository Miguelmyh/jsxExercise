const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name="miguel" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
