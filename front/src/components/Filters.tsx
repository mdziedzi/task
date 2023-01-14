import React, { useContext } from "react";
import styled from "styled-components";
import TransactionFilterContext from "../contexts/TransactionFilterContext";

const FiltersStyled = styled.div`
  flex: 1;
`;
const Filters = () => {
  const { setSearchValue } = useContext(TransactionFilterContext);

  const handleFiltering = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <FiltersStyled>
      <label>Filter Beneficiaries: </label>
      <input onChange={handleFiltering} />
    </FiltersStyled>
  );
};

export default Filters;
