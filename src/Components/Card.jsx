import styled from "styled-components";
import Lines from "../assets/img/Line.png";

const CardContainer = styled.div`
  /* background-color: #21092f; */
  /* width: 480px;
  min-height: 100vh;
  position: relative;
  margin-right: 50px; */
`;
const FrontSide = styled.div`
  max-width: 447px;
  width: 100%;
  height: 245px;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(164deg, #6348fe 4.74%, #610595 88.83%);
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
`;
const CardNumberContainer = styled.div`
  margin: 64px 0px 25px 0px;
  font-size: 28px;
  letter-spacing: 3.422px;
`;
const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

//BackSide
const BackSide = styled.div`
  max-width: 447px;
  width: 100%;
  height: 245px;
  border-radius: 10px;
  background: linear-gradient(169deg, #fff 5%, #d2d3d9 91.69%);
margin: 30px 0 0 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BlackLine = styled.div`
  max-width: 447px;
  width: 100%;
  height: 54px;
  background: #2f2f2f;
  margin-top: 23px;
`;
const CVCContainer = styled.div`
  max-width: 361px;
  width: 100%;
  height: 38px;
  border-radius: 4px;
  background: #adb5be;
  color: #fff;
  font-size: 14px;
  letter-spacing: 2px;
  margin: 24px 0 33px 0;
  padding: 0 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
function Card() {
  return (
    <div>
      <CardContainer>
        <FrontSide>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="84"
              height="47"
              viewBox="0 0 84 47"
              fill="none"
            >
              <ellipse
                cx="23.4783"
                cy="23.5"
                rx="23.4783"
                ry="23.5"
                fill="white"
              />
              <path
                d="M83.5 23.5C83.5 29.0647 78.9932 33.575 73.4348 33.575C67.8764 33.575 63.3696 29.0647 63.3696 23.5C63.3696 17.9353 67.8764 13.425 73.4348 13.425C78.9932 13.425 83.5 17.9353 83.5 23.5Z"
                stroke="white"
              />
            </svg>{" "}
          </div>
          <CardNumberContainer> 0000 0000 0000 0000</CardNumberContainer>
          <NameWrapper>
            <div>JANE APPLESEED</div>
            <div>00/00</div>
          </NameWrapper>
        </FrontSide>
        <BackSide>
          <BlackLine></BlackLine>
          <CVCContainer>000</CVCContainer>
          <div>
            <img src={Lines} alt="" />
          </div>
        </BackSide>
      </CardContainer>
    </div>
  );
}

export default Card;
