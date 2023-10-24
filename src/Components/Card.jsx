import styled from "styled-components";
import Lines from "../assets/img/Line.png";
import PropTypes from "prop-types";

function Card(props) {
  Card.propTypes = {
    names: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
    mm: PropTypes.string.isRequired,
    yy: PropTypes.string.isRequired,
    eg: PropTypes.string.isRequired,
  };
  return (
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
        <CardNumberContainer>
          {props.cardNumber ? props.cardNumber : "0000 0000 0000 0000"}
        </CardNumberContainer>
        <NameWrapper>
          <div>{props.names ? props.names : "JANE APPLESEED"}</div>
          <div>
            {props.mm ? props.mm : "00"} / {props.yy ? props.yy : "00"}
          </div>
        </NameWrapper>
      </FrontSide>
      <BackSideWrap>
        <BackSide>
          <BlackLine></BlackLine>
          <CVCContainer>{props.eg ? props.eg : "000"}</CVCContainer>
          <div>
            <img src={Lines} alt="" />
          </div>
        </BackSide>
      </BackSideWrap>
    </CardContainer>
  );
}

export default Card;
const CardContainer = styled.div`
  margin: 0 30px;
  max-width: 533px;
  width: 100%;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    max-height: 450px;
    height: 100%;
    position: relative;
  }
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

  @media (max-width: 750px) {
    position: absolute;
    top: 160px;
  }
`;
const CardNumberContainer = styled.div`
  margin: 64px 0px 25px 0px;
  font-size: 28px;
  letter-spacing: 3.422px;

  @media (max-width: 910px) {
    font-size: 18px;
  }
`;
const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

//BackSide
const BackSideWrap = styled.div`
  max-width: 530px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const BackSide = styled.div`
  max-width: 447px;
  width: 100%;
  height: 245px;
  border-radius: 10px;
  background: linear-gradient(169deg, #fff 5%, #d2d3d9 91.69%);
  margin: 30px 0 0 0;
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
  width: 80%;
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
