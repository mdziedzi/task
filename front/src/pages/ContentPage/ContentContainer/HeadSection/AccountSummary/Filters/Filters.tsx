import React, { useContext } from "react";
import TransactionFilterContext from "../../../../../../contexts/TransactionFilterContext";
import { StyledFilters } from "./Filters.styled";
import { useDebouncedCallback } from "use-debounce";

const Filters = () => {
  const { setSearchValue } = useContext(TransactionFilterContext);

  const handleFiltering = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    500
  );

  return (
    <StyledFilters>
      <label>Filter Beneficiaries: </label>
      <input onChange={handleFiltering} />
    </StyledFilters>
  );
};

export default Filters;
