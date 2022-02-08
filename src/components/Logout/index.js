import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Logout = ({ className, ...props }) => {
  const { logout } = useAuth0();

  const onClick = () => {
    logout();
  };

  return (
    <Wrapper className={className} onClick={onClick} {...props}>
      Logout
    </Wrapper>
  );
};

export default Logout;
