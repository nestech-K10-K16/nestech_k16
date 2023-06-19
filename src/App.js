import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const deletes = () => {
    try {
      setValue(value.slice(0, -1));
    } catch {
      return;
    }
  };

  const equal = () => {
    try {
      setValue(eval(value) + "");
    } catch {
      document.getElementById("result").value = "error";
      return;
    }
  };

  return (
    <div id="container">
      <div className="calculator">
        <input
          id="result"
          className="calculator-screen"
          type="text"
          value={value}
        />

        <form className="calculator-function">
          <div>
            <input
              id="delete"
              value="AC"
              type="button"
              onClick={(e) => setValue("")}
            />

            <input value="DEL" type="button" onClick={deletes} />

            <input
              type="button"
              value="."
              onClick={(e) => setValue(value + e.target.value)}
            />

            <input
              type="button"
              value="/"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>

          <div>
            <input
              type="button"
              value="7"
              onClick={(e) => setValue(value + e.target.value)}
            />

            <input
              type="button"
              value="8"
              onClick={(e) => setValue(value + e.target.value)}
            />

            <input
              type="button"
              value="9"
              onClick={(e) => setValue(value + e.target.value)}
            />

            <input
              type="button"
              value="*"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>

          <div>
            <input
              type="button"
              value="4"
              onClick={(e) => setValue(value + e.target.value)}
            />

            <input
              type="button"
              value="5"
              onClick={(e) => setValue(value + e.target.value)}
            />

            <input
              type="button"
              value="6"
              onClick={(e) => setValue(value + e.target.value)}
            />

            <input
              type="button"
              value="+"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>

          <div>
            <input
              type="button"
              value="1"
              onClick={(e) => setValue(value + e.target.value)}
            />

            <input
              type="button"
              value="2"
              onClick={(e) => setValue(value + e.target.value)}
            />

            <input
              type="button"
              value="3"
              onClick={(e) => setValue(value + e.target.value)}
            />

            <input
              type="button"
              value="-"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>

          <div>
            <input
              type="button"
              value="00"
              onClick={(e) => setValue(value + e.target.value)}
            />

            <input
              type="button"
              value="0"
              onClick={(e) => setValue(value + e.target.value)}
            />

            <input
              className="calculator-function-equal"
              type="button"
              value="="
              onClick={equal}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
