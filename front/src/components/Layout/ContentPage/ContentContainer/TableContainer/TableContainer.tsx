import React from "react";
import Table from "./Table/Table";
import { StyledTableContainer } from "./TableContainer.styled";

const TableContainer = () => {
  return (
    <StyledTableContainer>
      <Table />
    </StyledTableContainer>
  );
};

export default TableContainer;
