import axios from "axios";
import TransactionDto from "../../../_types/_dto/Transaction.dto";
import PaginationParamsInterface from "../../../_types/pagination.interface";

enum Endpoints {
  TRANSACTIONS = "/transactions",
}

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getTransactions = () =>
  api
    .get<TransactionDto[]>(Endpoints.TRANSACTIONS)
    .then((response) => response.data);

export const createTransaction = (data: TransactionDto) =>
  api.post(Endpoints.TRANSACTIONS, data);

export const deleteTransaction = (id: number) =>
  api.delete<TransactionDto[]>(Endpoints.TRANSACTIONS + `/${id}`);

export const getTransactionsPaginated = ({
  page,
  limit,
  beneficiary,
}: PaginationParamsInterface) => {
  let url = Endpoints.TRANSACTIONS + `?_page=${page}&_limit=${limit}`;
  if (beneficiary) url = url.concat(`&beneficiary_like=${beneficiary}`);
  return api.get<TransactionDto[]>(url).then((response) => response.data);
};
