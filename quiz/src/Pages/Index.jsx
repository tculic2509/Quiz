import axios from "axios";

import '../index.css';


function App() {
  return (
    <div id="App">
      <h1 id="title">QUIZ APP</h1>
        <div class="grid-container">
          <div class="grid-item th">ID</div>
          <div class="grid-item th">Player</div>
          <div class="grid-item th">Score</div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
        </div>
        <div className="user">
          <button className="button-user login">Login</button>
          <button className="button-user registration">Registracija</button>
        </div>
      </div>
  );
}

export default App;
