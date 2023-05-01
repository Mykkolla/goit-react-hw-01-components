import styled from 'styled-components';

export const Transactiontable = styled.table`
border-collapse: collapse;
`; 

export const Transactionth = styled.th`
background-color: #f2f2f2;
border: 1px solid #ddd;
padding: 8px;
text-align: left;
`; 
export const Transactiontd = styled.td`
border: 1px solid #ddd;
padding: 8px;
`; 


export const Transactiontr = styled.tr`
&:nth-of-type(2n) {
    background-color: #f2f2f2;
  }
`; 