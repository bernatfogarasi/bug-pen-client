import styled from "styled-components";
import image from "assets/icons/bug.png";

const Wrapper = styled.img`
  height: 100%;
  transform: rotate(45deg);
  /* background-color: #454b69; */
  filter: invert();
`;

const Image = ({ className, ...props }) => {
  return <Wrapper className={className} {...props} src={image}></Wrapper>;
};

export default Image;
