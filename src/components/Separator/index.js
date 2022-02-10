import styled from "styled-components";

const Wrapper = styled.div`
  height: 1px;
  width: 100%;
  background: #ccc;
`;

const Separator = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Separator;
