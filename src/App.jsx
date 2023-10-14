import styled from "styled-components";
import Card from "../src/Components/Card";
import Form from "./Components/Form";

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  
`;
function App() {
  return (
    <MainWrapper>
      <Card />
      <Form />
    </MainWrapper>
  );
}

export default App;
