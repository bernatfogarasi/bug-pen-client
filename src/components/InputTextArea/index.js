import styled, { css } from "styled-components";

const Wrapper = styled.textarea`
  border: 1px solid #888;
  font-family: inherit;
  padding: 4px;
  box-sizing: border-box;
  font-size: 18px;
  max-width: 400px;
  height: 100px;
  :focus {
    outline: none;
  }
  ${({ disabled }) =>
    disabled
      ? css`
          background: #ccc;
        `
      : css`
          background: #fff;
        `}
  resize: none;
`;

const InputTextArea = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default InputTextArea;
