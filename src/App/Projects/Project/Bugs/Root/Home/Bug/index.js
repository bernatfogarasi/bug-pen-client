import Link from "components/Link";
import Text from "components/Text";
import styled from "styled-components";
import Assignees from "./Assignees";
import Attributes from "./Attributes";
import Tags from "./Tags";

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  transition: 0.2s;
  :hover {
    background: #eee;
  }
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FirstRow = styled.div`
  grid-row: 1;
  grid-column: 1 / 3;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Index = styled.div`
  color: #00bfa6;
`;

const Title = styled(Text)`
  margin-left: 0;
`;

const Description = styled(Text)`
  grid-row: 2;
  grid-column: 2;
  word-wrap: break-word;
  max-height: 100px;
  font-size: 12px;
`;

const Bug = ({ className, bug, index, ...props }) => {
  return (
    <Wrapper
      className={className}
      to={`${window.location.pathname}/${bug.index}`}
      {...props}
    >
      <FirstRow>
        <Index>#{bug.index}</Index>
        <Title>{bug.title}</Title>
        <Tags indexes={[1, 2, 3]} />
      </FirstRow>
      <Attributes bug={bug} />
      <Assignees />
      {/* <Description>{bug.description}</Description> */}
    </Wrapper>
  );
};

export default Bug;
