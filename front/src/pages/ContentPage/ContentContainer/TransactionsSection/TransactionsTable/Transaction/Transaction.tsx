import React from "react";
import TransactionDto from "../../../../../../../_types/_dto/Transaction.dto";
import { useDeleteTransaction } from "../../../../../../api/transaction/transaction.controller";
import {
  StyledAmountCell,
  StyledCell,
  StyledTransaction,
} from "./Transaction.styled";
import { getMonetaryValue } from "../../../../../../utils/monetary.util";

interface TransactionProps {
  transaction: TransactionDto;
  refForward: ((node: HTMLElement | null) => void) | null;
}

const Transaction = ({ transaction, refForward }: TransactionProps) => {
  const { mutate } = useDeleteTransaction();

  const handleTransactionDelete = (id: number) => {
    mutate(id);
  };

  return (
    <StyledTransaction ref={refForward}>
      <StyledAmountCell>
        {getMonetaryValue(transaction?.amount)}
      </StyledAmountCell>
      <StyledCell>{transaction?.address}</StyledCell>
      <StyledCell>{transaction?.account}</StyledCell>
      <StyledCell>{transaction?.description}</StyledCell>
      <StyledCell>{transaction?.beneficiary}</StyledCell>
      <StyledCell>
        <button onClick={() => handleTransactionDelete(transaction.id)}>
          Delete
        </button>
      </StyledCell>
    </StyledTransaction>
  );
};

export default Transaction;
