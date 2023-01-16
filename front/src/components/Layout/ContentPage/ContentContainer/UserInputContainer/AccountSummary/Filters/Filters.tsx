import React, { useContext } from "react";
import TransactionFilterContext from "../../../../../../../contexts/TransactionFilterContext";
import { StyledFilters } from "./Filters.styled";

const Filters = () => {
  const { setSearchValue } = useContext(TransactionFilterContext);

  const handleFiltering = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <StyledFilters>
      <label>Filter Beneficiaries: </label>
      <input onChange={handleFiltering} />
    </StyledFilters>
  );
};

export default Filters;
