import React, { useCallback, useContext, useRef } from "react";
import styled from "styled-components";
import { useGetTransactionsInfinite } from "../../../../../api/transaction/transaction.controller";
import TransactionFilterContext from "../../../../../contexts/TransactionFilterContext";
import { StyledTransactionsTable } from "./TransactionsTable.styled";
import Transaction from "./Transaction/Transaction";

const TableElementStyled = styled.table`
  border-collapse: separate;
  border-spacing: 1em 4em;
`;

const TransactionsTable = () => {
  const { searchValue } = useContext(TransactionFilterContext);

  const {
    data: fetchedData,
    hasNextPage,
    fetchNextPage,
    isLoading,
    error,
  } = useGetTransactionsInfinite(searchValue);

  const observer = useRef<IntersectionObserver>();
  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (!hasNextPage || isLoading) {
        return;
      }
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (hasNextPage) {
            fetchNextPage();
          }
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasNextPage]
  );

  if (error) return <div>{`An error has occurred: ${error}`}</div>;
  if (isLoading || !fetchedData) return <div>Loading...</div>;

  return (
    <StyledTransactionsTable>
      <TableElementStyled>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Address</th>
            <th>Account</th>
            <th>Description</th>
            <th>Beneficiary</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {fetchedData?.pages[0]?.length > 0 ? (
            fetchedData.pages.map((page) =>
              page.map((item, idx) => (
                <Transaction
                  key={item.id}
                  refForward={page.length === idx + 1 ? lastElementRef : null}
                  transaction={item}
                />
              ))
            )
          ) : (
            <div>No results found</div>
          )}
        </tbody>
      </TableElementStyled>
    </StyledTransactionsTable>
  );
};

export default TransactionsTable;
