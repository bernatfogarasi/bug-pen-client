import styled, { css } from "styled-components";

const Wrapper = styled.button`
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 14px;
  background: #454b69;
  margin-left: auto;
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.6;
        `
      : css`
          cursor: pointer;
          :hover {
            transform: scale(1.05);
            /* background: #ccc; */
          }
          :active {
            transform: scale(0.95);
          }
          transition: 0.1s;
        `}
`;

const Submit = ({ className, submitText = "Submit", ...props }) => {
  return (
    <Wrapper className={className} type="submit" {...props}>
      {submitText}
    </Wrapper>
  );
};

export default Submit;
