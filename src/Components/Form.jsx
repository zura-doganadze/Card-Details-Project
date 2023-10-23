import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

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
const ErrorMessage = styled.p`
  color: #ff5050;
  font-size: 14px;
  margin-top: 8px;
`;

const schema = yup
  .object({
    cardholderName: yup.string().required(),
    cardName: yup.string().required().length(16),
    age: yup.number().positive().integer().required(),
    mm: yup.number().positive().integer().min(2).required(),
    yy: yup.number().positive().integer().min(2).required(),
    cvc: yup.number().positive().integer().min(3).required(),
  })
  .required();

function Form(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <FormWrapper>
      <div>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <NameNumberWrap>
            <Label htmlFor="">Cardholder name</Label>
            <NameInput
              {...register("cardholderName")}
              value={props.names}
              onChange={(event) => props.setNames(event.target.value)}
              type="text"
              placeholder="e.g. Jane Appleseed"
            />
            {errors.cardholderName && (
              <ErrorMessage>This field is empty</ErrorMessage>
            )}
            <Label htmlFor="">Card Number</Label>
            <CardNumberInput
              {...register("cardName")}
              value={props.cardNumber}
              onChange={(event) => props.setCardNUmber(event.target.value)}
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
            />
            {errors.cardName && (
              <ErrorMessage>Wrong format, numbers only</ErrorMessage>
            )}
          </NameNumberWrap>
          <DataWrapper>
            <DataContainer>
              <Label htmlFor="">Exp. Date (MM/YY)</Label>
              <div>
                <MMInput
                  {...register("mm")}
                  value={props.mm}
                  onChange={(event) => props.setMm(event.target.value)}
                  type="text"
                  placeholder="MM"
                />
                <YYInput
                  {...register("yy")}
                  value={props.yy}
                  onChange={(event) => props.setYy(event.target.value)}
                  type="text"
                  placeholder="YY"
                />
              </div>
              {(errors.mm || errors.yy) && (
                <ErrorMessage>Can’t be blank</ErrorMessage>
              )}
            </DataContainer>
            <div>
              <Label htmlFor="">CVC</Label>
              <CCVInput
                {...register("cvc")}
                value={props.eg}
                onChange={(event) => props.setEg(event.target.value)}
                type="text"
                placeholder="e.g. 123"
              />
              {errors.cvc && <ErrorMessage>Can’t be blank</ErrorMessage>}
            </div>
          </DataWrapper>
          <Button type="submit">Confirm</Button>
        </FormContainer>
      </div>
    </FormWrapper>
  );
}
export default Form;
