import React from "react";
import styled from "styled-components";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyledFormInput } from "./FormInput.styled";

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
    <StyledFormInput>
      <label htmlFor={id}>{label}</label>
      <InputStyled type={type} placeholder={placeholder} {...fieldAttributes} />
      <ValidationErrorStyled>{errorMsg}</ValidationErrorStyled>
    </StyledFormInput>
  );
};

export default FormInput;
