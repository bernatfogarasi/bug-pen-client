import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Wrapper = styled.div`
  background: black;
  color: white;
  padding: 10px;
`;

const Logout = ({ className, ...props }) => {
  const { logout } = useAuth0();
  const onClick = () => {
    logout();
  };
  return (
    <Wrapper className={className} {...props} onClick={onClick}>
      Log out
    </Wrapper>
  );
};

export default Logout;
