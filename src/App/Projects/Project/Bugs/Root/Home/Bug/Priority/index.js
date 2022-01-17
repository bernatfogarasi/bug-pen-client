import styled from "styled-components";

const Wrapper = styled.div``;

const Priority = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      Priority
    </Wrapper>
  );
};

export default Priority;
