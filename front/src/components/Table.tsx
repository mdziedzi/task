import React, { useState } from "react";
import styled from "styled-components";
import { useMutation, useQuery, useQueryClient } from "react-query";
import * as api from "../transactionsApi";
import TransactionsDto from "../../_types/_dto/Transactions.dto";

const TableStyled = styled.div``;

interface TableProps {
  // searchValue: string;
}

const Table = ({}: TableProps) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery<TransactionsDto>(
    "transactions",
    () => api.getTransactions().then((res) => res.data)
  );

  const { mutate } = useMutation(api.deleteTransaction, {
    onSuccess: () => {
      queryClient.invalidateQueries("transactions");
    },
  });

  if (error) return <div>'An error has occurred: ' + error</div>;
  if (isLoading || !data) return <div>'Loading...'</div>;

  // const filteredTransactions = data.filter(i => i.beneficiary.includes(searchValue));
  const filteredTransactions = data;

  const handleFiltering = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };
  const handleTransactionDelete = (id: number) => {
    mutate(id);
    console.log("deleted id: ", id);
  };
  return (
    <TableStyled>
      <table>
        <tr>
          <th>Amount</th>
          <th>Description</th>
          <th>
            Beneficiary
            <input onChange={handleFiltering} />
          </th>
          <th>Options</th>
        </tr>
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
      </table>
    </TableStyled>
  );
};

export default Table;
