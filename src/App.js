import "./styles.css";
import { useState } from "react";

export default function App() {
  const [meaning, setMeaning] = useState("");

  const textChangeHandler = (e) => {
    var value = e.target.value;
    setMeaning(emoji[value]);
    setTimeout(() => {
      e.target.value = "";
    }, 3000);
  };

  const onClickHandler = (item) => {
    setMeaning(emoji[item]);
  };

  var emoji = {
    "😍": "Love",
    "😃": "Smile",
    "😡": "Anger",
    "😱": "Shock",
    "🤢": "Disgusting",
    "👍": "Best Of Luck",
    "😣": "Frustrated"
  };

  var emoji_face = Object.keys(emoji);

  return (
    <div className="App">
      <h1>Emoji Decoder</h1>
      <textarea
        rows="2"
        cols="30"
        placeholder="Put your emoji here"
        onChange={textChangeHandler}
        maxLength="2"
        id="input"
      ></textarea>
      <h3>
        Or <br /> Select Them From Below
      </h3>
      <ul id="list">
        {emoji_face.map((item) => {
          return (
            <li id="emoji" key={item} onClick={() => onClickHandler(item)}>
              {item}
            </li>
          );
        })}
      </ul>
      <br />
      <br />
      <h2>{meaning}</h2>
    </div>
  );
}
