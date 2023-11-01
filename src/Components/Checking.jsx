import React from "react";
import styled from "styled-components";
import CheckImg from "../../src/assets/img/Group 9.svg";
function Checking() {
  return (
    <Wrapper>
      <div>
        <img src={CheckImg} alt="Check Img" />
      </div>
      <Title>THANK YOU!</Title>
      <span>We’ve added your card details</span>
      <Button>Continue</Button>
    </Wrapper>
  );
}

export default Checking;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;
const Title = styled.h1`
  color: #21092f;
  text-align: center;
  font-size: 28px;
  letter-spacing: 3.422px;
  margin: 35px 0 10px 0;
`;
const Button = styled.button`
  color: #fff;
  font-size: 18px;
  border-radius: 8px;
  background: var(--Deep-Violet, #21092f);
  padding: 15px 0;
  margin-top: 60px;
  cursor: pointer;
`;
