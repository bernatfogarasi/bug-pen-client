import styled from "styled-components";

const Wrapper = styled.div`
  grid-row: 2;
  grid-column: 2;
  overflow: auto;
`;

const Content = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Content;
