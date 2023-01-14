import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useCreateTransaction } from "../src/transaction/transaction.controller";

const FromStyled = styled.form`
  border: 1px solid #000;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const FormInputStyled = styled.input`
  margin-top: 1rem;
`;


const Form = () => {
  const { handleSubmit, register, reset: resetForm } = useForm();

  const { mutate } = useCreateTransaction();

  const onSubmit = (data: any) => {
    mutate(data);
    resetForm();
  };

  return (
    <FromStyled onSubmit={handleSubmit(onSubmit)}>
      <FormInputStyled placeholder={"amount"} {...register("amount")} />
      <FormInputStyled
        placeholder={"account number"}
        {...register("accountNumber")}
      />
      <FormInputStyled placeholder={"address"} {...register("address")} />
      <FormInputStyled
        placeholder={"description"}
        {...register("description")}
      />
      <FormInputStyled type={"submit"} />
    </FromStyled>
  );
};

export default Form;
