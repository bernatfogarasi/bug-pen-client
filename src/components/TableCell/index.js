import styled from "styled-components";

const Wrapper = styled.div`
  display: table-cell;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 5px;
  height: 100%;
`;

const TableCell = ({ className, children, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {children || "-"}
    </Wrapper>
  );
};

export default TableCell;
