import styled, { css } from "styled-components";

const Wrapper = styled.input`
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-family: inherit;
  padding: 4px;
  font-size: 18px;
  :focus {
    outline: none;
  }
  ${({ disabled }) =>
    disabled
      ? css`
          background: #ccc;
        `
      : css`
          background: #00bfa6;
        `}
`;

const Input = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Input;
