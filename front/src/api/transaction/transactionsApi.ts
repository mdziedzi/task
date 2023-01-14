import axios from "axios";
import TransactionDto from "../../../_types/_dto/Transaction.dto";
import TransactionsDto from "../../../_types/_dto/Transactions.dto";

enum Endpoints {
  TRANSACTIONS = "/transactions",
}

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getTransactions = () =>
  api
    .get<TransactionsDto>(Endpoints.TRANSACTIONS)
    .then((response) => response.data);

export const createTransaction = (data: TransactionDto) =>
  api.post(Endpoints.TRANSACTIONS, data);

export const deleteTransaction = (id: number) =>
  api.delete<TransactionsDto>(Endpoints.TRANSACTIONS + `/${id}`);
