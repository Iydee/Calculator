import './App.css'

export default function App() {
  
let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector('#clear');

let total = document.querySelector("#total");

let btnSpread = [...btns];
let allBtnSpread = [...allBtns];

// For Number Inputs
  btnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    // Inner Values for calculator

    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }

    let value = btns[i].innerHTML;
    resultBox.innerHTML += value;
  });
});

  
  return (
    <main>
     <div className="container">
       
      <div class="display"> <p id="result-box">0</p>
        </div>
      
      <div className="buttons">
        <div className="button calc-action-btn" id="clear">AC</div>
        <div className="button calc-action-btn">( )</div>
        <div className="button calc-action-btn">%</div>
        <div className="button calc-action-btn">÷</div>
      </div>
      
     <div className="buttons">
        <div className="button num-button seven">7</div>
        <div className="button num-button eight">8</div>
        <div className="button num-button nine">9</div>
        <div className="button calc-action-btn">x</div>
     </div>
      
      <div className="buttons">
        <div className="button num-button  four">4</div>
        <div className="button num-button  five">5</div>
        <div className="button num-button  six">6</div>
        <div className="button calc-action-btn">-</div>
        </div>
      
      <div className="buttons">
        <div className="button num-button one">1</div>
        <div className="button num-button two">2</div>
        <div className="button num-button three">3</div>
        <div className="button calc-action-btn">+</div>
      </div>
      
     <div className="buttons">
       <div className="button num-button  point">.</div>
       <div className="button num-button  zero">0</div>
       <div className="button calc-action-btn">MC</div>
       <div className="button calc-action-btn" id="total">=</div>
     </div>

    </div>
    </main>
  )
}
