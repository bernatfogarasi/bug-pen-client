import styled from "styled-components";

const Wrapper = styled.div`
  display: table;
  border-collapse: collapse;
  min-width: 100%;
  box-sizing: border-box;
`;

const Table = ({ className, head, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Table;
