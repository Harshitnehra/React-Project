import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [CalVal, setCalVal] = useState("");
  const OnButtonClick = (event) => {
    if(event === "C"){
      setCalVal("")
    }else if(event === "="){
      const result = eval(CalVal)
      setCalVal(result)
    }else{
      const newDisplayVelue = CalVal + event
      setCalVal(newDisplayVelue)
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayval={CalVal}></Display>
      <ButtonsContainer OnButtonClick={OnButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
