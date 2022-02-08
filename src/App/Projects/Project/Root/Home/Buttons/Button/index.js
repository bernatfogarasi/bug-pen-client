import ButtonAnimated from "components/ButtonAnimated";
import styled from "styled-components";

const Wrapper = styled(ButtonAnimated)``;

const Button = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Button;
