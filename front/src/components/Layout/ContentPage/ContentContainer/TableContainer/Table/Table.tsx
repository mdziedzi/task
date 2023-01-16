import React, { useCallback, useContext, useRef } from "react";
import styled from "styled-components";
import {
  useDeleteTransaction,
  useGetTransactionsInfinite,
} from "../../../../../../api/transaction/transaction.controller";
import TransactionFilterContext from "../../../../../../contexts/TransactionFilterContext";
import { StyledTable } from "./Table.styled";

const TableElementStyled = styled.table`
  border-collapse: separate;
  border-spacing: 1em 4em;
`;

const Table = () => {
  const scroller = useRef<HTMLDivElement>(null);
  const { searchValue } = useContext(TransactionFilterContext);

  const {
    data: fetchedData,
    hasNextPage,
    fetchNextPage,
    isLoading,
    error,
  } = useGetTransactionsInfinite(searchValue);

  const { mutate } = useDeleteTransaction();

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

  const handleTransactionDelete = (id: number) => {
    mutate(id);
  };
  return (
    <StyledTable ref={scroller}>
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
              <tr
                key={item.id}
                ref={page.length === idx + 1 ? lastElementRef : null}
              >
                <td>{item?.amount}</td>
                <td>{item?.address}</td>
                <td>{item?.account}</td>
                <td>{item?.description}</td>
                <td>{item?.beneficiary}</td>
                <td>
                  <button onClick={() => handleTransactionDelete(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )
        ) : (
          <div>No results found</div>
        )}
        </tbody>
      </TableElementStyled>
    </StyledTable>
  );
};

export default Table;
