import React, { useContext } from "react";
import styled from "styled-components";
import {
  useDeleteTransaction,
  useGetTransactions,
} from "../api/transaction/transaction.controller";
import TransactionFilterContext from "../contexts/TransactionFilterContext";

const TableStyled = styled.div``;

const Table = () => {
  const { searchValue } = useContext(TransactionFilterContext);

  const { data: transactions, isLoading, error } = useGetTransactions();

  const { mutate } = useDeleteTransaction();

  if (error) return <div>'An error has occurred: ' + error</div>;
  if (isLoading || !transactions) return <div>'Loading...'</div>;

  let filteredTransactions = transactions;
  if (searchValue) {
    filteredTransactions = transactions.filter((i) =>
      i.beneficiary?.includes(searchValue)
    );
  }

  const handleTransactionDelete = (id: number) => {
    mutate(id);
  };
  return (
    <TableStyled>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>
              Beneficiary
              {/*<input onChange={handleFiltering} />*/}
            </th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions?.length > 0 ? (
            filteredTransactions.map((item) => (
              <tr key={item.id}>
                <td>{item?.amount}</td>
                <td>{item?.description}</td>
                <td>{item?.beneficiary}</td>
                <td>
                  <button onClick={() => handleTransactionDelete(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <div>No results found</div>
          )}
        </tbody>
      </table>
    </TableStyled>
  );
};

export default Table;
