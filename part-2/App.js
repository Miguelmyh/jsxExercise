const App = () => (
  <div class="tweets">
    <Tweet
      username="myh"
      name="miguel"
      date="june 21"
      message="this is the first tweet"
    />
    <Tweet username="CheekyFox" name="Bells" message="Just updating the feed" />
    <Tweet
      username="Pickles are fun"
      name="Lucia"
      date="April 13"
      message="How does this work?, help"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
