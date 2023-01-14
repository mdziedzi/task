import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as api from "../transactionsApi";

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

interface FormProps {}
const Form = ({}: FormProps) => {
  const { handleSubmit, register, reset } = useForm();

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(api.addTransaction, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("transactions");
      reset();
    },
  });

  const onSubmit = (data: any) => {
    console.log("submited ", data);
    mutate(data);
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
