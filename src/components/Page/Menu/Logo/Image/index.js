import image from "assets/icons/bug.png";
import styled from "styled-components";

const Wrapper = styled.img`
  height: 30px;
  transform: rotate(45deg);
`;

const Image = ({ className, ...props }) => {
  return <Wrapper className={className} src={image} {...props} />;
};

export default Image;
