import React from "react";
import { getMonetaryValue } from "../../../../../../../utils/monetary.util";
import { StyledBalance } from "./Balance.styled";
import { useBalanceHook } from "./Balance.hook";

const Balance = () => {
  const balance = useBalanceHook();

  return (
    <StyledBalance>
      Balance:
      {balance && <span>{getMonetaryValue(balance)}</span>}
    </StyledBalance>
  );
};

export default Balance;
