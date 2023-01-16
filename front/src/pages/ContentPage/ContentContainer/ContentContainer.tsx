import React, { useState } from "react";
import TransactionFilterContext from "../../../contexts/TransactionFilterContext";
import { StyledContentContainer } from "./ContentContainer.styled";
import HeadSection from "./HeadSection/HeadSection";
import TransactionsSection from "./TransactionsSection/TransactionsSection";

const ContentContainer = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <StyledContentContainer>
      <TransactionFilterContext.Provider
        value={{ searchValue, setSearchValue }}
      >
        <HeadSection />
        <TransactionsSection />
      </TransactionFilterContext.Provider>
    </StyledContentContainer>
  );
};

export default ContentContainer;
