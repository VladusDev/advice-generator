import { useState } from "react";
import btn from "./assets/img/icon-dice.svg";
import mocupDesktop from "./assets/img/pattern-divider-desktop.svg";
import mocupMobile from "./assets/img/pattern-divider-mobile.svg";

function App() {
  const width = window.innerWidth;

  const [def, setDef] = useState({
    id: 1,
    advice: "Everybody makes mistakes",
  });

  const getData = () => {
    const primer = Math.floor(Math.random() * 225) + 1;
    fetch(`https://api.adviceslip.com/advice/${primer}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.slip.id);
        setDef({ id: json.slip.id, advice: json.slip.advice });
      })
      .catch((err) => {
        console.log("Ошибка при получении данных" + err);
      });
  };

  return (
    <div className="advice-wrapper">
      <div className="advice-block">
        <div className="advice-content">
          <div className="advice-number">Advice #{def.id}</div>
          <div className="advice-text">
            <q>{def.advice}</q>
          </div>
          <div className="advice-mocup">
            <img
              width={width > 767 ? 480 : 280}
              src={width > 767 ? mocupDesktop : mocupMobile}
              alt=""
            />
          </div>
          <button onClick={() => getData()} className="adivce-btn">
            <img className="btn" src={btn} alt="Dice" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
