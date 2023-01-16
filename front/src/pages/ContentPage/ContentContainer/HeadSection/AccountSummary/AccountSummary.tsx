import React from "react";
import Balance from "./Balance/Balance";
import Filters from "./Filters/Filters";
import { StyledAccountSummary } from "./AccountSummary.styled";

const AccountSummary = () => {
  return (
    <StyledAccountSummary>
      <Balance />
      <Filters />
    </StyledAccountSummary>
  );
};

export default AccountSummary;
