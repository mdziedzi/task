import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import * as api from "./transactionsApi";
import TransactionDto from "../../../_types/_dto/Transaction.dto";

const ITEMS_PER_PAGE = 20;

const TRANSACTIONS_CACHE_KEY = "transactions";
const TRANSACTIONS_PAGINATED_CACHE_KEY = "transactions-paginated";

export const useGetTransactions = () => {
  return useQuery({
    queryKey: TRANSACTIONS_CACHE_KEY,
    queryFn: () => api.getTransactions(),
    staleTime: 2 * 60 * 1000,
  });
};

export const useDeleteTransaction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: TRANSACTIONS_CACHE_KEY,
    mutationFn: (id: number) => api.deleteTransaction(id),
    onSuccess: () => queryClient.invalidateQueries(),
  });
};

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: TRANSACTIONS_CACHE_KEY,
    mutationFn: (transaction: TransactionDto) =>
      api.createTransaction(transaction),
    onSuccess: () => queryClient.invalidateQueries(),
  });
};

export const useGetTransactionsInfinite = (searchValue: string) => {
  return useInfiniteQuery({
    queryKey: [TRANSACTIONS_PAGINATED_CACHE_KEY, searchValue],
    queryFn: ({ pageParam = 1 }) =>
      api.getTransactionsPaginated({
        page: pageParam,
        limit: ITEMS_PER_PAGE,
        beneficiary: searchValue,
      }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length === ITEMS_PER_PAGE ? pages.length + 1 : undefined;
    },
  });
};
