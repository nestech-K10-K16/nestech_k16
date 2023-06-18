import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      {/* <div className="container">
        <div className="screen">
          <span className="overlay"></span>
          <span className="input"></span>
        </div>
        <div className="keyboard">
          <button className="item item-1">AC</button>
          <button className="item item-2">DEL</button>
          <button className="item item-3">+</button>
          <button className="item item-4">7</button>
          <button className="item item-5">8</button>
          <button className="item item-6">9</button>
          <button className="item item-7">-</button>
          <button className="item item-8">4</button>
          <button className="item item-9">5</button>
          <button className="item item-10">6</button>
          <button className="item item-11">*</button>
          <button className="item item-12">1</button>
          <button className="item item-13">2</button>
          <button className="item item-14">3</button>
          <button className="item item-15">/</button>
          <button className="item item-16">0</button>
          <button className="item item-17">00</button>
          <button className="item item-18">.</button>
          <button className="item item-19">=</button>
        </div>
      </div> */}

      <div class="calculator">
        <form action="#" name="form">
          <div class="result">
            <input type="text" name="disp" id="disp" />
          </div>
          <div class="buttons">
            <div class="row">
              <input
                type="button"
                value="7"
                name="v7"
                onclick="val(v7.value)"
              />
              <input
                type="button"
                value="8"
                name="v8"
                onclick="val(v8.value)"
              />
              <input
                type="button"
                value="9"
                name="v9"
                onclick="val(v9.value)"
              />
              <input
                type="button"
                value="+"
                name="add"
                onclick="val(add.value)"
              />
            </div>
            <div class="row">
              <input
                type="button"
                value="4"
                name="v4"
                onclick="val(v4.value)"
              />
              <input
                type="button"
                value="5"
                name="v5"
                onclick="val(v5.value)"
              />
              <input
                type="button"
                value="6"
                name="v6"
                onclick="val(v6.value)"
              />
              <input
                type="button"
                value="-"
                name="sub"
                onclick="val(sub.value)"
              />
            </div>
            <div class="row">
              <input
                type="button"
                value="1"
                name="v1"
                onclick="val(v1.value)"
              />
              <input
                type="button"
                value="2"
                name="v2"
                onclick="val(v2.value)"
              />
              <input
                type="button"
                value="3"
                name="v3"
                onclick="val(v3.value)"
              />
              <input
                type="button"
                value="*"
                name="mul"
                onclick="val(mul.value)"
              />
            </div>
            <div class="row">
              <input
                type="button"
                value="0"
                name="v0"
                onclick="val(v0.value)"
              />
              <input
                type="button"
                value="."
                name="vdot"
                onclick="val(vdot.value)"
              />
              <input
                type="button"
                value="/"
                name="vdiv"
                onclick="val(vdiv.value)"
              />
              <input
                type="button"
                title="Click two times to clear result"
                value="="
                name="veql"
                onclick="calculate()"
              />
            </div>
          </div>
        </form>
      </div>
      <script>
      function val(result){
            form.disp.value = form.disp.value + result;
        }
        
        function calculate(){
            if (form.disp.value == ""){
                alert("Plase enter numbers");
             
            }
            else {
                form.disp.value = eval (form.disp.value);
            }
        }
        var btn = form.veql;
        btn.addEventListener('dblclick', function(){
            form.disp.value = "";
        })

      </script>
    </div>
  );
};

export default App;
