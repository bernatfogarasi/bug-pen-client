import image from "assets/illustrations/bug_fixing.svg";
import styled from "styled-components";

const Wrapper = styled.img`
  width: 60%;
  max-width: 500px;
`;

const Illustration = ({ className, ...props }) => {
  return <Wrapper className={className} src={image} {...props}></Wrapper>;
};

export default Illustration;
