import styled from "styled-components";

const Wrapper = styled.div``;

const FormFile = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default FormFile;
