import "./App.css";
import { useState } from "react";
import NumberButton from "./NumberButton";
function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operations = ["/", "*", "+", "-", ".", "=", "%"];
  const calculate = (operation) => {
    if ((operations.includes(operation) && calc === "") || (operations.includes(operation) && operations.includes(calc.slice(-1)))) return;
    setResult((prev) => prev + calc + operation);
    setCalc("");
  };

  const showCalc = () => {
    if (calc === "" || result === "" || !operations.includes(result.slice(-1))) return;
    setResult((prev) => prev + calc);
    setCalc(eval(result + calc).toString());
    setResult("");
  };

  const reverseNumber = () => {
    setCalc((parseInt(calc) * -1).toString());
  };
  const addNumber = (e) => {
    const number = e.target.textContent.toString();
    if (calc === "0") {
      if (number === ".") return setCalc((prev) => prev + number);
      return setCalc(number);
    }
    setCalc((prev) => prev + number);
  };
  return (
    <>
      <div className="background-patern"></div>
      <div className="calculator-grid">
        <div className="output">
          <div className="output-previus">{result}</div>
          <div className="output-current">{calc}</div>
        </div>
        <button onClick={() => (setCalc(""), setResult(""))}>AC</button>
        <button onClick={reverseNumber}>+/-</button>
        <button onClick={() => calculate("%")}>%</button>
        <button onClick={() => calculate("/")}>÷</button>
        <NumberButton action="7" click={addNumber} />
        <NumberButton action="8" click={addNumber} />
        <NumberButton action="9" click={addNumber} />
        <button onClick={() => calculate("*")}>x</button>
        <NumberButton action="4" click={addNumber} />
        <NumberButton action="5" click={addNumber} />
        <NumberButton action="6" click={addNumber} />
        <button onClick={() => calculate("-")}>-</button>
        <NumberButton action="1" click={addNumber} />
        <NumberButton action="2" click={addNumber} />
        <NumberButton action="3" click={addNumber} />
        <button onClick={() => calculate("+")}>+</button>
        <button className="span-two" onClick={(e) => addNumber(e)}>
          0
        </button>
        <button onClick={(e) => addNumber(e)}>.</button>
        <button onClick={showCalc}>=</button>
      </div>
    </>
  );
}

export default App;
