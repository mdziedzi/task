import React, { useState } from "react";
import TransactionFilterContext from "../../../../contexts/TransactionFilterContext";
import { StyledContentContainer } from "./ContentContainer.styled";
import UserInputContainer from "./UserInputContainer/UserInputContainer";
import TableContainer from "./TableContainer/TableContainer";

const ContentContainer = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <StyledContentContainer>
      <TransactionFilterContext.Provider
        value={{ searchValue, setSearchValue }}
      >
        <UserInputContainer />
        <TableContainer />
        {/*<StyledUserInputContainer>*/}
        {/*  <AccountSummary />*/}
        {/*  <Form />*/}
        {/*</StyledUserInputContainer>*/}
        {/*<StyledTableContainer>*/}
        {/*  <Table />*/}
        {/*</StyledTableContainer>*/}
      </TransactionFilterContext.Provider>
    </StyledContentContainer>
  );
};

export default ContentContainer;
