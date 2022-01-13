import TableCell from "components/TableCell";
import styled from "styled-components";

const Wrapper = styled(TableCell)`
  background: #eee;
  opacity: 0.8;
  font-size: 12px;
`;

const TableHeadCell = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default TableHeadCell;
