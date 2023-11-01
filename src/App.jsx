import styled from "styled-components";
import Card from "../src/Components/Card";
import Form from "./Components/Form";
import { useState } from "react";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [names, setNames] = useState("");
  const [mm, setMm] = useState("");
  const [yy, setYy] = useState("");
  const [age, setAge] = useState("");
  return (
    <MainWrapper>
      <Card
        names={names ? names : ""}
        cardNumber={cardNumber ? cardNumber : ""}
        mm={mm ? mm : ""}
        yy={yy ? yy : ""}
        age={age ? age : ""}
      />
      <Form
        names={names}
        setNames={setNames}
        cardNumber={cardNumber ? cardNumber : ""}
        setCardNumber={setCardNumber}
        mm={mm ? mm : ""}
        setMm={setMm}
        yy={yy ? yy : ""}
        setYy={setYy}
        age={age ? age : ""}
        setAge={setAge}
      />
    </MainWrapper>
  );
}

export default App;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;

  @media (max-width: 760px) {
    flex-direction: column;
    margin: 30px 16px 0;
  }
`;
