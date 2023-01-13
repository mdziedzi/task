export default interface TransactionDto {
    id: number,
    amount: number,
    beneficiary: string,
    account: string,
    address: string,
    date: Date,
    description: string
}