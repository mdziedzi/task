import React from 'react';
import styled from 'styled-components'
import Table from './Table';
import Form from './Form';

const ContentStyled = styled.div`
  flex: 1;
`;

const ContentContainerStyled = styled.div`
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
  border: 1px solid #000;
`;

const UserInputContainerStyled = styled.div`
  background-color: #EEE;
  display: flex;
  border: 1px solid #000;
`;

const TableContainer = styled.div`
  background-color: #DDD;
  border: 1px solid #000;
`;

const UserSettings = styled.div`
  border: 1px solid #000;
  flex: 1;
`;

function Content() {

    return (
        <ContentStyled>
            <ContentContainerStyled>
                <UserInputContainerStyled>
                    <UserSettings>UserSettings</UserSettings>
                    <Form />
                </UserInputContainerStyled>
                <TableContainer>
                    <Table />
                </TableContainer>
            </ContentContainerStyled>
        </ContentStyled>
    )
}

export default Content;