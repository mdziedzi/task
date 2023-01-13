import React from "react";
import styled from "styled-components";
import {useQuery} from "react-query";
import {getTransactions} from "../transactionsApi";
import TransactionsDto from "../../_types/_dto/Transactions.dto";

const TableStyled = styled.div`
`;

const Table = () => {

    const {data, isLoading, error} = useQuery<TransactionsDto>('transactions', () => getTransactions().then(res => res.data))

    if (error) return <div>'An error has occurred: ' + error</div>
    if (isLoading || !data) return <div>'Loading...'</div>

    return (
        <TableStyled>

            <table>
                <tr>
                    <th>Amount</th>
                    <th>Description</th>
                </tr>
                {data.map(((item) => (
                    <tr key={item.id}>
                        <td>{item.amount}</td>
                        <td>{item.description}</td>
                    </tr>
                )))}
            </table>
        </TableStyled>
    );
};

export default Table;