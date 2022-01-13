import styled from "styled-components";

const Wrapper = styled.div`
  flex: 0 0 auto;
  overflow: scroll;
`;

const Content = ({ className, children, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default Content;
