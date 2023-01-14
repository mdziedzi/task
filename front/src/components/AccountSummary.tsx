import React from "react";
import styled from "styled-components";
import Balance from "./Balance";
import Filters from "./Filters";

const AccountSummaryStyled = styled.div`
  border: 1px solid #000;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const AccountSummary = () => {
  return (
    <AccountSummaryStyled>
      <Balance />
      <Filters />
    </AccountSummaryStyled>
  );
};

export default AccountSummary;
