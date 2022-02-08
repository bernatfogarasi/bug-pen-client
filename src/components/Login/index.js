import { useAuth0 } from "@auth0/auth0-react";
import ButtonAnimated from "components/ButtonAnimated";
import styled from "styled-components";

const Wrapper = styled(ButtonAnimated)``;

const Login = ({ className, ...props }) => {
  const { loginWithPopup } = useAuth0();

  const onClick = () => {
    loginWithPopup({ prompt: "select_account" });
  };

  return (
    <Wrapper className={className} onClick={onClick} {...props}>
      Login
    </Wrapper>
  );
};

export default Login;
