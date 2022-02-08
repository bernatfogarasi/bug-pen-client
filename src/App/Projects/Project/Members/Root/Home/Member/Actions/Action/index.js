import ButtonModalForm from "components/ButtonModalForm";
import styled from "styled-components";

const Wrapper = styled(ButtonModalForm)``;

const Action = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Action;
