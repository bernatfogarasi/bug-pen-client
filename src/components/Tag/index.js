import styled, { css } from "styled-components";

const Wrapper = styled.div`
  padding: 2px 10px;
  white-space: nowrap;
  border-radius: 10px;
  font-size: 12px;
  text-align: center;
  border: 1px solid #ccc;
  background: #eee;
  color: black;
  width: fit-content;
  ${({ textColor, backgroundColor, borderColor }) =>
    css`
      color: ${textColor};
      background-color: ${backgroundColor};
      border-color: ${borderColor};
    `}
`;

const Tag = ({ className, title, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {title}
    </Wrapper>
  );
};

export default Tag;
