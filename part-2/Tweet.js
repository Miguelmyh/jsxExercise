const Tweet = ({ username, name, date = "June 21", message }) => (
  <div class="tweet">
    <div class="header">
      {name}
      <small>
        <span>@{username} |</span>
        <span>{date}</span>
      </small>
    </div>
    <p>{message}</p>
  </div>
);
