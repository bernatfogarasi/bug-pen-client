import styled from "styled-components";

const Wrapper = styled.div`
  grid-row: 2;
  grid-column: 2;
  overflow: auto;
  border: 1px solid;
`;

const Content = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      Content
    </Wrapper>
  );
};

export default Content;
