import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Root from "./Root";
import GlobalStyle from "styles/globalStyle";
import { useState } from "react";
import { AppContext } from "context";
import { Auth0Provider } from "@auth0/auth0-react";
import Projects from "./Projects/Root";
import Profiles from "./Profiles/Root";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const Wrapper = styled.div``;

const App = ({ className, ...props }) => {
  const [menuIsOpen, setMenuIsOpen] = useState();
  return (
    <Wrapper className={className} {...props}>
      <GlobalStyle />
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={"http://localhost:3000"}
        audience={"http://localhost:8000"}
      >
        <AppContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
          <Routes>
            <Route element={<Root />} path="/" />
            <Route element={<Projects />} path="/projects" />
          </Routes>
        </AppContext.Provider>
      </Auth0Provider>
    </Wrapper>
  );
};

export default App;
