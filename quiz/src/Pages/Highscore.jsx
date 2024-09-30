import axios from "axios";
import Highscore from "./Highscore";
import '../index.css';


function HighScore() {
  return (
        <div class="grid-container">
          <div class="grid-item th border-left-radius">ID</div>
          <div class="grid-item th">Player</div>
          <div class="grid-item th border-right-radius">Score</div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
        </div>
  );
}

export default HighScore;
