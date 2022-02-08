import { useAuth0 } from "@auth0/auth0-react";
import ButtonAnimated from "components/ButtonAnimated";
import styled from "styled-components";

const Wrapper = styled(ButtonAnimated)`
  margin: 10px;
  margin-top: auto;
  font-size: 14px;
`;

const Logout = ({ className, ...props }) => {
  const { logout } = useAuth0();

  const onClick = () => {
    logout();
  };

  return (
    <Wrapper className={className} onClick={onClick} {...props}>
      Log out
    </Wrapper>
  );
};

export default Logout;
