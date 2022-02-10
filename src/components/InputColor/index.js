import styled from "styled-components";

const Wrapper = styled.input`
  background: #eee;
  border: 1px solid #ccc;
`;

const InputColor = ({ className, ...props }) => {
  return <Wrapper className={className} type="color" {...props}></Wrapper>;
};

export default InputColor;
