import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from "prop-types";
import Checking from "./Checking.jsx";
import React from "react";
import { InputMask } from "primereact/inputmask";

const schema = yup
  .object({
    names: yup.string().required(),
    cardNumber: yup.number().required("Card number is required"),
    age: yup.number().positive().integer().required(),
    mm: yup.number().required(),
    yy: yup.number().positive().integer().required(),
    // cvc: yup.number().positive().integer().required(),
  })
  .required();

function Form(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [buttonClicked, setButtonClicked] = useState(false);
  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);

    setButtonClicked(true);
  };

  Form.propTypes = {
    names: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
    mm: PropTypes.string.isRequired,
    yy: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    setNames: PropTypes.func.isRequired,
    setCardNumber: PropTypes.func.isRequired,
    setMm: PropTypes.func.isRequired,
    setYy: PropTypes.func.isRequired,
    setAge: PropTypes.func.isRequired,
  };

  const names = watch("names");
  const cardNumber = watch("cardNumber");
  const mm = watch("mm");
  const yy = watch("yy");
  const age = watch("age");

  useEffect(() => {
    props.setNames(names);
    props.setCardNumber(cardNumber);
    props.setMm(mm);
    props.setYy(yy);
    props.setAge(age);
  }, [names, cardNumber, mm, yy, age]);
  return (
    <FormWrapper>
      {buttonClicked && Object.keys(errors).length === 0 ? (
        <Checking />
      ) : (
        <div>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <NameNumberWrap>
              <Label htmlFor="">Cardholder name</Label>
              <NameInput
                {...register("names")}
                type="text"
                placeholder="e.g. Jane Appleseed"
              />
              {errors.names && <ErrorMessage>This field is empty</ErrorMessage>}
              <Label htmlFor="">Card Number</Label>
              <StyledInputMask
                {...register("cardNumber")}
                mask="9999 9999 9999 9999"
                placeholder="e.g. 1234 5678 9123 0000"
              />
              {errors.cardNumber && <ErrorMessage>Can’t be blank</ErrorMessage>}
            </NameNumberWrap>
            <DataWrapper>
              <DataContainer>
                <Label htmlFor="">Exp. Date (MM/YY)</Label>
                <div>
                  <StyledInputMaskmm
                    {...register("mm")}
                    mask="99"
                    placeholder="MM"
                  />
                  <StyledInputMaskyy
                    {...register("yy")}
                    mask="99"
                    placeholder="YY"
                  />
                </div>
                {(errors.mm || errors.yy) && (
                  <ErrorMessage>Can’t be blank</ErrorMessage>
                )}
              </DataContainer>
              <div>
                <Label htmlFor="">CVC</Label>
                <StyledInputMaskcvc
                  {...register("age")}
                  mask="999"
                  placeholder="e.g. 123"
                />
                {errors.age && <ErrorMessage>Can’t be blank</ErrorMessage>}
              </div>
            </DataWrapper>
            <Button type="submit">Confirm</Button>
          </FormContainer>
        </div>
      )}
    </FormWrapper>
  );
}
export default Form;

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
const StyledInputMask = styled(InputMask)`
  width: 100%;
  padding: 11px 16px;
  border-radius: 8px;
  border: 1px solid #dfdee0;
  background: #fff;
  color: #21092f;
  font-size: 18px;
`;
const StyledInputMaskmm = styled(InputMask)`
  color: #21092f;
  font-size: 18px;
  padding: 11px 16px;
  max-width: 80px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #dfdee0;
  background: #fff;
`;
const StyledInputMaskyy = styled(InputMask)`
  color: #21092f;
  font-size: 18px;
  padding: 11px 16px;
  margin: 0 20px 0 18px;
  max-width: 80px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #dfdee0;
  background: #fff;
`;
const StyledInputMaskcvc = styled(InputMask)`
  color: #21092f;
  font-size: 18px;
  padding: 11px 16px;
  margin-top: 9px;
  max-width: 191px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #dfdee0;
  background: #fff;
`;
const DataWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  align-items: baseline;
  margin: 26px 0 40px 0;
`;
const DataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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
const ErrorMessage = styled.p`
  color: #ff5050;
  font-size: 14px;
  margin-top: 8px;
`;
