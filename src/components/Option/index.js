import styled from "styled-components";

const Wrapper = styled.option``;

const Option = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Option;
