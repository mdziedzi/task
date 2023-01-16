import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useCreateTransaction } from "../../../../../api/transaction/transaction.controller";
import FormInput from "../../../../../components/FormInput/FormInput";
import TransactionDto from "../../../../../../_types/_dto/Transaction.dto";
import { StyledNewTransactionForm } from "./NewTransactionForm.styled";

const FormSubmit = styled.input`
  margin-top: 1rem;
`;

const NewTransactionForm = () => {
  const {
    handleSubmit,
    register,
    reset: resetForm,
    formState: { errors: formErrors },
  } = useForm<TransactionDto>();

  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [showFailureMsg, setShowFailureMsg] = useState(false);

  const { mutate, isSuccess, isError } = useCreateTransaction();

  useEffect(() => {
    if (isSuccess) setShowSuccessMsg(true);
    const timer = setTimeout(() => {
      setShowSuccessMsg(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isSuccess]);

  useEffect(() => {
    if (isError) setShowFailureMsg(true);
    const timer = setTimeout(() => {
      setShowFailureMsg(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isError]);

  const onSubmit = (data: TransactionDto) => {
    data.date = new Date().toISOString();
    mutate(data);
    resetForm();
  };

  return (
    <StyledNewTransactionForm onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        id={"amount"}
        label={"Amount:"}
        type={"number"}
        placeholder={"Provide amount"}
        errorMsg={formErrors?.amount?.message?.toString()}
        fieldAttributes={register("amount", {
          required: "This field is required",
          valueAsNumber: true,
          validate: {
            positive: (value) => value > 0 || "The amount must be positive",
          },
        })}
      />
      <FormInput
        id={"account"}
        label={"Account number:"}
        type={"number"}
        placeholder={"Provide account number"}
        errorMsg={formErrors?.account?.message?.toString()}
        fieldAttributes={register("account", {
          required: "This field is required",
        })}
      />
      <FormInput
        id={"address"}
        label={"Address:"}
        type={"text"}
        placeholder={"Provide address"}
        errorMsg={formErrors?.address?.message?.toString()}
        fieldAttributes={register("address", {
          required: "This field is required",
        })}
      />
      <FormInput
        id={"description"}
        label={"Description:"}
        type={"text"}
        placeholder={"Provide description"}
        errorMsg={formErrors?.description?.message?.toString()}
        fieldAttributes={register("description", {
          required: "This field is required",
        })}
      />
      <FormSubmit type={"submit"} />
      {showSuccessMsg && <div>New transaction created successfully</div>}
      {showFailureMsg && <div>Something went wrong</div>}
    </StyledNewTransactionForm>
  );
};

export default NewTransactionForm;
