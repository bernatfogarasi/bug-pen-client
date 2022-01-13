import styled from "styled-components";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";
import Image from "./Image";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

const User = ({ className, ...props }) => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <Wrapper className={className} {...props}>
      {/* {isAuthenticated ? <Logout /> : <Login />} */}
      {JSON.stringify(user) || "null"}
      <Image />
    </Wrapper>
  );
};

export default User;
