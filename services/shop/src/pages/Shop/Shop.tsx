import React, { useState } from "react";
import css from "./Shop.module.scss";
import {sum} from '@packages/shared'

const Shop: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      const result = eval(input); 
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const sharedResult = sum(1,2)
  
  return (
    <div className={css.calculator}>
      <div className={css.display}>{input || "0"}</div>
      <div className={css.buttons}>
        <button className={css.clear} onClick={handleClear}>
          C
        </button>
        <button className={css.backspace} onClick={handleBackspace}>
          ⌫
        </button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button className={css.equals} onClick={calculateResult}>
          =
        </button>
      </div>

	  <div>результат из функции shared: {sharedResult}</div>
    </div>
  );
};

export default Shop;