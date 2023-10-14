import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 380px;
  width: 100%;
`;
function Form() {
  return (
    <Wrapper>
      <div>
        <form action="">
          <label htmlFor="">Cardholder name</label>
          <input type="text" name="" id="" placeholder="e.g. Jane Appleseed" />
          <label htmlFor="">Card Number</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="ee.g. 1234 5678 9123 0000"
          />
          <div>
            <div>
              <label htmlFor="">Exp. Date (MM/YY)</label>
              <input type="text" name="" id="" placeholder="MM" />
              <input type="text" name="" id="" placeholder="YY" />
            </div>
            <div>
              <label htmlFor="">CVC</label>
              <input type="text" name="" id="" placeholder="e.g. 123" />
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}
export default Form;
