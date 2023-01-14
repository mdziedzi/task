import React from "react";
import { getMonetaryValue } from "../utils/monetary.util";
import { useBalance } from "../hooks/useBalance";
import styled from "styled-components";

const BalanceStyled = styled.div`
  flex: 1;
`;

const Balance = () => {
  const balance = useBalance();

  return (
    <BalanceStyled>
      Balance:
      {balance && <span>{getMonetaryValue(balance)}</span>}
    </BalanceStyled>
  );
};

export default Balance;
