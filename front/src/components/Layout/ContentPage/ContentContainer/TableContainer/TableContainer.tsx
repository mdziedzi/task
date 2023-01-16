import React from "react";
import TransactionsTable from "./TransactionsTable/TransactionsTable";
import { StyledTableContainer } from "./TableContainer.styled";

const TableContainer = () => {
  return (
    <StyledTableContainer>
      <TransactionsTable />
    </StyledTableContainer>
  );
};

export default TableContainer;
