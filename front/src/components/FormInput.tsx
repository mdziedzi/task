import React from "react";
import styled from "styled-components";
import { UseFormRegisterReturn } from "react-hook-form";

const FormInputStyled = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

const InputStyled = styled.input``;

const ValidationErrorStyled = styled.div`
  color: red;
`;

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  errorMsg?: string | undefined;
  fieldAttributes: UseFormRegisterReturn;
}

const FormInput = ({
  id,
  label,
  type,
  placeholder,
  errorMsg,
  fieldAttributes,
}: FormInputProps) => {
  return (
    <FormInputStyled>
      <label htmlFor={id}>{label}</label>
      <InputStyled type={type} placeholder={placeholder} {...fieldAttributes} />
      <ValidationErrorStyled>{errorMsg}</ValidationErrorStyled>
    </FormInputStyled>
  );
};

export default FormInput;
