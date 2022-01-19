import styled from "styled-components";

const Wrapper = styled.div``;

const Boolean = ({ className, value, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {value ? "Yes" : "No"}
    </Wrapper>
  );
};

export default Boolean;
