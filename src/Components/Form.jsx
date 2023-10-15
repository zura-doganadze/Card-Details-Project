import styled from "styled-components";

const FormWrapper = styled.div`
  max-width: 380px;
  width: 100%;
  margin-right: 30px;

  @media (max-width: 750px) {
    margin: 0 20px;
    max-width: 440px;
  }
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  /* max-width: 381px; */
  width: 100%;
`;
const NameNumberWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Label = styled.label`
  color: #21092f;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 9px 0;
`;
const NameInput = styled.input`
  /* max-width: 381px; */
  width: 100%;
  padding: 11px 16px;
  border-radius: 8px;
  border: 1px solid #dfdee0;
  background: #fff;

  color: #21092f;
  font-size: 18px;
  font-family: "Space Grotesk", sans-serif;
`;
const CardNumberInput = styled.input`
  /* max-width: 381px; */
  width: 100%;
  padding: 11px 16px;
  border-radius: 8px;
  border: 1px solid #dfdee0;
  background: #fff;

  color: #21092f;
  font-size: 18px;
  font-family: "Space Grotesk", sans-serif;
`;

const DataWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin: 26px 0 40px 0;
`;
const DataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const MMInput = styled.input`
  color: #21092f;
  font-size: 18px;
  padding: 11px 16px;
  max-width: 80px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #dfdee0;
  background: #fff;
  font-family: "Space Grotesk", sans-serif;
`;
const YYInput = styled.input`
  color: #21092f;
  font-size: 18px;
  padding: 11px 16px;
  margin: 0 20px 0 18px;
  max-width: 80px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #dfdee0;
  background: #fff;
  font-family: "Space Grotesk", sans-serif;
`;
const CCVInput = styled.input`
  color: #21092f;
  font-size: 18px;
  padding: 11px 16px;
  margin-top: 9px;
  max-width: 191px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #dfdee0;
  background: #fff;
  font-family: "Space Grotesk", sans-serif;
`;
const Button = styled.button`
  color: #fff;
  font-size: 18px;
  /* max-width: 381px; */
  width: 100%;
  border-radius: 8px;
  background: #21092f;
  padding: 15px 0;
  cursor: pointer;
  text-transform: capitalize;
  letter-spacing: 1.222px;
`;
function Form() {
  return (
    <FormWrapper>
      <div>
        <FormContainer action="">
          <NameNumberWrap>
            <Label htmlFor="">Cardholder name</Label>
            <NameInput
              type="text"
              name=""
              id=""
              placeholder="e.g. Jane Appleseed"
            />
            <Label htmlFor="">Card Number</Label>
            <CardNumberInput
              type="text"
              name=""
              id=""
              placeholder="ee.g. 1234 5678 9123 0000"
            />
          </NameNumberWrap>
          <DataWrapper>
            <DataContainer>
              <Label htmlFor="">Exp. Date (MM/YY)</Label>
              <div>
                <MMInput type="text" name="" id="" placeholder="MM" />
                <YYInput type="text" name="" id="" placeholder="YY" />
              </div>
            </DataContainer>
            <div>
              <Label htmlFor="">CVC</Label>
              <CCVInput type="text" name="" id="" placeholder="e.g. 123" />
            </div>
          </DataWrapper>
        </FormContainer>
        <Button>confitm</Button>
      </div>
    </FormWrapper>
  );
}
export default Form;
