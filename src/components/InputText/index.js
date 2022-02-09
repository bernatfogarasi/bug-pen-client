import Input from "components/Input";
import styled from "styled-components";

const Wrapper = styled(Input)``;

const InputText = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default InputText;
