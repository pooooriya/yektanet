import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  border: 1px solid #a7a7a7;
  border-collapse: collapse;
  text-align: center;
  margin-top: 10px;
  th {
    padding: 5px 10px;
    border: 1px solid #a7a7a7;
  }
  td {
    border: 1px solid #a7a7a7;
    padding: 5px 10px;
  }
  tr:nth-child(even) {
    background-color: #f7f7f7;
  }
`;
