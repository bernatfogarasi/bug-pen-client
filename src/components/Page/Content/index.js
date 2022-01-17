import styled from "styled-components";

const Wrapper = styled.div`
  grid-row: 2;
  grid-column: 2;
  overflow: auto;
`;

const Content = ({ className, children, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default Content;
