import styled from "styled-components";

const Wrapper = styled.div``;

const InputFiles = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default InputFiles;
