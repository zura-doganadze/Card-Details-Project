import styled from "styled-components";
import Card from "../src/Components/Card";
import Form from "./Components/Form";
import { useState } from "react";

function App() {
  const [cardNumber, setCardNUmber] = useState("");
  const [names, setNames] = useState("");
  const [mm, setMm] = useState("");
  const [yy, setYy] = useState("");
  const [eg, setEg] = useState("");

  return (
    <MainWrapper>
      <Card names={names} cardNumber={cardNumber} mm={mm} yy={yy} eg={eg} />
      <Form
        names={names}
        setNames={setNames}
        cardNumber={cardNumber}
        setCardNUmber={setCardNUmber}
        mm={mm}
        setMm={setMm}
        yy={yy}
        setYy={setYy}
        eg={eg}
        setEg={setEg}
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
