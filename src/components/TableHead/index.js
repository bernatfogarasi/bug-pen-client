import TableHeadCell from "components/TableHeadCell";
import TableRow from "components/TableRow";
import styled from "styled-components";

const Wrapper = styled(TableRow)`
  position: sticky;
  background: white;
  top: 0;
  :hover {
    background: transparent;
  }
  border-color: #ccc;
`;

const TableHead = ({ className, names, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {names.map((name) => (
        <TableHeadCell key={name}>{name}</TableHeadCell>
      ))}
    </Wrapper>
  );
};

export default TableHead;
