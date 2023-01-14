import { useGetTransactions } from "../api/transaction/transaction.controller";

export const useBalance = () => {
  const { data: transactions } = useGetTransactions();
  return transactions?.reduce((sum, transaction) => {
    return sum + transaction.amount;
  }, 0);
};
