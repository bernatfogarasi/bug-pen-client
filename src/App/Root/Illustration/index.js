import styled from "styled-components";
import image from "assets/illustrations/bug_fixing.svg";

const Wrapper = styled.img`
  width: 60%;
`;

const Illustration = ({ className, ...props }) => {
  return <Wrapper className={className} src={image} {...props}></Wrapper>;
};

export default Illustration;
