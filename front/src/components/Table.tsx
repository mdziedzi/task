import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  useDeleteTransaction,
  useGetTransactionsInfinite,
} from "../api/transaction/transaction.controller";
import TransactionFilterContext from "../contexts/TransactionFilterContext";

const TableStyled = styled.div`
  //max-height: 400px;
  //overflow: scroll;
`;

const TableElementStyled = styled.table`
  border-collapse: separate;
  border-spacing: 0 4em;
`;

const Table = () => {
  const scroller = useRef<HTMLDivElement>(null);
  const { searchValue } = useContext(TransactionFilterContext);

  // const { data: fetchedData, isLoading, error } = useGetTransactions();

  const {
    data: fetchedData,
    hasNextPage,
    fetchNextPage,
    isLoading,
    error,
  } = useGetTransactionsInfinite();

  const { mutate } = useDeleteTransaction();

  // useEffect(() => {
  //   let fetching = false;
  //   const onScroll = async (event: Event) => {
  //     // console.log("HALLLLO");
  //
  //     const { offsetTop, offsetHeight, scrollTop, scrollHeight } =
  //       event?.target as HTMLDivElement;
  //     console.log(offsetTop, offsetHeight, scrollTop, scrollHeight);
  //
  //     if (!fetching && scrollHeight - scrollTop <= offsetHeight * 1.5) {
  //       fetching = true;
  //       if (hasNextPage) await fetchNextPage();
  //       console.log("fetched scroll");
  //       fetching = false;
  //     }
  //   };
  //
  //   scroller.current?.addEventListener("scroll", onScroll);
  //   return () => {
  //     scroller.current?.removeEventListener("scroll", onScroll);
  //   };
  // }, []);

  useEffect(() => {
    let fetching = false;
    const onScroll = async (event: Event) => {
      if (!(event.target as Document).scrollingElement) return;
      const { scrollHeight, scrollTop, clientHeight } = (
        event.target as Document
      ).scrollingElement!;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    console.log("qqqqqq");
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (error) return <div>{`An error has occurred: ${error}`}</div>;
  if (isLoading || !fetchedData) return <div>Loading...</div>;

  console.log("fethecd data", fetchedData);

  const handleTransactionDelete = (id: number) => {
    mutate(id);
  };
  return (
    <TableStyled ref={scroller}>
      <TableElementStyled>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>Beneficiary</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {fetchedData?.pages[0]?.length > 0 ? (
            fetchedData.pages.map((page) =>
              page.map((item) => (
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
            )
          ) : (
            <div>No results found</div>
          )}
        </tbody>
      </TableElementStyled>
    </TableStyled>
  );
};

export default Table;
