import styled from "styled-components";

const Wrapper = styled.div`
  display: table-row;
  /* table-layout: fixed;
  width: 100%; */
  border: 1px solid #ccc;
  border-width: 1px 0;
  :hover {
    background: #eee;
  }
  user-select: none;
`;

const TableRow = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default TableRow;
