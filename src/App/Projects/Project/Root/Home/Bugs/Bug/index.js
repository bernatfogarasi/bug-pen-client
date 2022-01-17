import Text from "components/Text";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 3fr;
  gap: 10px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid;
  border-radius: 4px;
  text-overflow: ellipsis;
`;

const Index = styled(Text)`
  grid-row: 1;
  grid-column: 1;
  color: #00bfa6;
  min-width: 50px;
`;

const Title = styled(Text)`
  grid-row: 1;
  grid-column: 2;
  margin-left: 0;
  white-space: nowrap;
`;

const Description = styled(Text)`
  opacity: 0.8;
  white-space: nowrap;
`;

const Bug = ({ className, bug, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Index>#{bug.index}</Index>
      <Title title={bug.title}>{bug.title}</Title>
      <Description title={bug.description}>
        {bug.description || "-"}
      </Description>
    </Wrapper>
  );
};

export default Bug;
