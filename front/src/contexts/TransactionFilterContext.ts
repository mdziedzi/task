import { createContext } from "react";

export interface Filter {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

const TransactionFilterContext = createContext<Filter>({
  searchValue: "",
  setSearchValue: () => undefined,
});
export default TransactionFilterContext;
