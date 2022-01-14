import styled, { css } from "styled-components";

const Wrapper = styled.label``;

const Label = ({ className, children, required, ...props }) => {
  return (
    <Wrapper className={className} required={required} {...props}>
      {children}
      {required && "*"}
    </Wrapper>
  );
};

export default Label;
