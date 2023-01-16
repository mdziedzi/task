import React from "react";
import AccountSummary from "./AccountSummary/AccountSummary";
import NewTransactionForm from "./NewTransactionForm/NewTransactionForm";
import { StyledHeadSection } from "./HeadSection.styled";

const HeadSection = () => {
  return (
    <StyledHeadSection>
      <AccountSummary />
      <NewTransactionForm />
    </StyledHeadSection>
  );
};

export default HeadSection;
