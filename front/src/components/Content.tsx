import React, { useState } from "react";
import styled from "styled-components";
import Table from "./Table";
import Form from "./Form";
import AccountSummary from "./AccountSummary";
import TransactionFilterContext from "../contexts/TransactionFilterContext";

const ContentStyled = styled.div`
  flex: 1;
`;

const ContentContainerStyled = styled.div`
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
  border: 1px solid #000;
`;

const UserInputContainerStyled = styled.div`
  background-color: #eee;
  display: flex;
  border: 1px solid #000;
`;

const TableContainer = styled.div`
  background-color: #ddd;
  border: 1px solid #000;
`;

const Content = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <ContentStyled>
      <ContentContainerStyled>
        <TransactionFilterContext.Provider
          value={{ searchValue, setSearchValue }}
        >
          <UserInputContainerStyled>
            <AccountSummary />
            <Form />
          </UserInputContainerStyled>
          <TableContainer>
            <Table />
          </TableContainer>
        </TransactionFilterContext.Provider>
      </ContentContainerStyled>
    </ContentStyled>
  );
};

export default Content;
