import Link from "components/Link";
import Text from "components/Text";
import styled from "styled-components";
import Attributes from "./Attributes";

const Wrapper = styled(Link)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-auto-rows: auto auto;
  gap: 10px;
  border: 1px solid;
  border-radius: 4px;
  padding: 10px;
  transition: 0.2s;
  :hover {
    background: #eee;
  }
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Index = styled(Text)`
  grid-row: 1;
  grid-column: 1;
  color: #00bfa6;
`;

const Title = styled(Text)`
  grid-row: 1;
  grid-column: 2;
  margin-left: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Bug = ({ className, bug, index, ...props }) => {
  return (
    <Wrapper
      className={className}
      to={window.location.pathname + "/bugs"}
      {...props}
    >
      <Index>#{bug.index}</Index>
      <Title>{bug.title}</Title>
      <Attributes bug={bug} />
    </Wrapper>
  );
};

export default Bug;
