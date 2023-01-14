import axios from 'axios';
import TransactionDto from "../_types/_dto/Transaction.dto";

enum Endpoints {
    TRANSACTIONS = '/transactions'
}

const api = axios.create({
    baseURL: 'http://localhost:3000'
});

export const getTransactions = () => api.get(Endpoints.TRANSACTIONS)

export const addTransaction = (data: TransactionDto) => api.post(Endpoints.TRANSACTIONS, data)

export const deleteTransaction = (id: number) => api.delete(Endpoints.TRANSACTIONS + `/${id}`)