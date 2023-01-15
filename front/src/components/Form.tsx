import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useCreateTransaction } from "../api/transaction/transaction.controller";
import FormInput from "./FormInput";

const FromStyled = styled.form`
  border: 1px solid #000;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const FormSubmit = styled.input`
  margin-top: 1rem;
`;

const Form = () => {
  const {
    handleSubmit,
    register,
    reset: resetForm,
    formState: { errors: formErrors },
  } = useForm();

  const { mutate } = useCreateTransaction();

  const onSubmit = (data: any) => {
    mutate(data);
    resetForm();
  };

  return (
    <FromStyled onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        id={"amount"}
        label={"Amount:"}
        type={"number"}
        placeholder={"Provide amount"}
        errorMsg={formErrors?.amount?.message?.toString()}
        fieldAttributes={register("amount", {
          required: "To pole jest wymagane",
          valueAsNumber: true,
          validate: {
            positive: (value) =>
              value > 0 || "Kwota musi być liczą wiekszą niż 0",
          },
        })}
      />
      <FormInput
        id={"accNum"}
        label={"Account number:"}
        type={"number"}
        placeholder={"Provide account number"}
        errorMsg={formErrors?.accNum?.message?.toString()}
        fieldAttributes={register("accNum", {
          required: "To pole jest wymagane",
        })}
      />
      <FormInput
        id={"address"}
        label={"Address:"}
        type={"text"}
        placeholder={"Provide address"}
        errorMsg={formErrors?.address?.message?.toString()}
        fieldAttributes={register("address", {
          required: "To pole jest wymagane",
        })}
      />
      <FormInput
        id={"description"}
        label={"Description:"}
        type={"text"}
        placeholder={"Provide description"}
        errorMsg={formErrors?.description?.message?.toString()}
        fieldAttributes={register("description", {
          required: "To pole jest wymagane",
        })}
      />
      <FormSubmit type={"submit"} />
    </FromStyled>
  );
};

export default Form;
