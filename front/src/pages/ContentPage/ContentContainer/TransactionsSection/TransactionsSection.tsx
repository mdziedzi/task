import React from "react";
import TransactionsTable from "./TransactionsTable/TransactionsTable";
import { StyledTransactionsSection } from "./TransactionsSection.styled";

const TransactionsSection = () => {
  return (
    <StyledTransactionsSection>
      <TransactionsTable />
    </StyledTransactionsSection>
  );
};

export default TransactionsSection;
