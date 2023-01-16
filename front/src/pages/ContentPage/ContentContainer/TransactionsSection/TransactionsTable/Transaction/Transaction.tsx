import React from "react";
import TransactionDto from "../../../../../../../_types/_dto/Transaction.dto";
import { useDeleteTransaction } from "../../../../../../api/transaction/transaction.controller";
import { StyledCell, StyledTransaction } from "./Transaction.styled";
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
      <StyledCell>{getMonetaryValue(transaction?.amount)}</StyledCell>
      <td>{transaction?.address}</td>
      <td>{transaction?.account}</td>
      <td>{transaction?.description}</td>
      <td>{transaction?.beneficiary}</td>
      <td>
        <button onClick={() => handleTransactionDelete(transaction.id)}>
          Delete
        </button>
      </td>
    </StyledTransaction>
  );
};

export default Transaction;
