import React from "react";
import AccountSummary from "./AccountSummary/AccountSummary";
import Form from "./Form/Form";
import { StyledUserInputContainer } from "./UserInputContainer.styled";

const UserInputContainer = () => {
  return (
    <StyledUserInputContainer>
      <AccountSummary />
      <Form />
    </StyledUserInputContainer>
  );
};

export default UserInputContainer;
