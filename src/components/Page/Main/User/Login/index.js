import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  background: black;
  color: white;
  padding: 10px;
`;

const Login = ({ className, ...props }) => {
  const { getAccessTokenSilently, loginWithRedirect } = useAuth0();
  const [accessToken, setAccessToken] = useState();

  const onClick = async () => {
    loginWithRedirect();
    const token = await getAccessTokenSilently();
    setAccessToken(token);
  };

  useEffect(() => {
    const getAccessToken = async () => {
      // try {
      const token = await getAccessTokenSilently();
      setAccessToken(token);
      //   } catch (error) {
      //     if (error.error === "login_required") {
      //       loginWithRedirect();
      //     }
      //     if (error.error === "consent_required") {
      //       loginWithRedirect();
      //     }
      //     throw error;
      //   }
    };
    getAccessToken();
  }, [getAccessTokenSilently]);

  // useEffect(() => {
  //   try {
  //     const response = await fetch("http://localhost:8000", {
  //       method: "GET",
  //       headers: { authorization: `Bearer ${token}` },
  //     });
  //     const json = await response.json();
  //     console.log(json);
  //     window.history.replaceState(null, null, "/projects");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [accessToken]);

  return (
    <>
      <Wrapper className={className} {...props} onClick={onClick}>
        Log in or sign up
      </Wrapper>
    </>
  );
};

export default Login;
