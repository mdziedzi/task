import React from "react";
import { getMonetaryValue } from "../../../../../../utils/monetary.util";
import { StyledBalance, StyledBalanceValue } from "./Balance.styled";
import { useBalanceHook } from "./Balance.hook";

const Balance = () => {
  const balance = useBalanceHook();

  return (
    <StyledBalance>
      {"Balance: "}
      {balance && (
        <StyledBalanceValue>{getMonetaryValue(balance)}</StyledBalanceValue>
      )}
    </StyledBalance>
  );
};

export default Balance;
