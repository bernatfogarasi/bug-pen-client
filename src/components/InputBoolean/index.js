import styled from "styled-components";

const Wrapper = styled.input`
  background: #00bfa6;
  padding: 10px;
`;

const InputBoolean = ({ className, ...props }) => {
  return <Wrapper className={className} type="checkbox" {...props}></Wrapper>;
};

export default InputBoolean;
