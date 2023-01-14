import { useMutation, useQuery, useQueryClient } from "react-query";
import * as api from "./transactionsApi";
import TransactionDto from "../../../_types/_dto/Transaction.dto";

const TRANSACTIONS_CACHE_KEY = "transactions";

export const useTransaction = () => {
  return useQuery({
    queryKey: TRANSACTIONS_CACHE_KEY,
    queryFn: () => api.getTransactions()
  });
};

export const useDeleteTransaction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: TRANSACTIONS_CACHE_KEY,
    mutationFn: (id: number) => api.deleteTransaction(id),
    onSuccess: () => queryClient.invalidateQueries(TRANSACTIONS_CACHE_KEY)
  });
};

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: TRANSACTIONS_CACHE_KEY,
    mutationFn: (transaction: TransactionDto) => api.createTransaction(transaction),
    onSuccess: () => queryClient.invalidateQueries(TRANSACTIONS_CACHE_KEY)
  });
};