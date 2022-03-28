import Section from "components/Section";
import styled, { css } from "styled-components";

const Wrapper = styled(Section)`
  display: grid;
  ${({ columns }) =>
    columns
      ? css`
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        `
      : css`
          background: red;
        `}
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  gap: 10px;
  & > * {
    outline: 1px solid #ccc;
    padding: 10px;
    background: #f8f8f8;
    border-radius: 4px;
  }
`;

const SectionGrid = ({ className, columns, ...props }) => {
  return <Wrapper className={className} columns={columns} {...props}></Wrapper>;
};

export default SectionGrid;
