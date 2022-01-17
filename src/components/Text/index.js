import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Text = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Text;
