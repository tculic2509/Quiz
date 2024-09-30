import axios from "axios";
import Highscore from "./Highscore";
import '../index.css';


function App() {
  return (
    <div id="App">
      <h1 id="title">QUIZ APP</h1>
      <div id="sort">
        <p>Sort:</p>
        <select>
          <option>----</option>
          <option>Ascending</option>
          <option>Descending</option>
        </select>
      </div>
      <Highscore />
      <div className="user">
        <button className="button-user login">Login</button>
        <button className="button-user registration">Registracija</button>
      </div>
    </div>
  );
}

export default App;
