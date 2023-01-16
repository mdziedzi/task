import React from "react";
import TransactionDto from "../../../../../../../../_types/_dto/Transaction.dto";
import { useDeleteTransaction } from "../../../../../../../api/transaction/transaction.controller";
import { StyledTransaction } from "./Transaction.styled";

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
      <td>{transaction?.amount}</td>
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
