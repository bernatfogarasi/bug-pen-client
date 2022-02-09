import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "context";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import GlobalStyle from "styles/globalStyle";
import Root from "./Root";
import Projects from "./Projects/Root";
import Project from "./Projects/Project/Root";
import Bugs from "./Projects/Project/Bugs/Root";
import Connections from "./Connections/Root";
import Profiles from "./Profiles/Root";
import Profile from "./Profiles/Profile/Root";
import Members from "./Projects/Project/Members/Root";
import Bug from "./Projects/Project/Bugs/Bug/Root";
import Edit from "./Projects/Project/Edit/Root";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const Wrapper = styled.div``;

const App = ({ className, ...props }) => {
  const [menuIsOpen, setMenuIsOpen] = useState();
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState();
  const [showOverlay, setShowOverlay] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [membershipsCount, setMembershipsCount] = useState(0);
  const [hint, setHint] = useState();
  const [profiles, setProfiles] = useState([]);
  const [profile, setProfile] = useState();
  const [me, setMe] = useState();

  return (
    <Wrapper className={className} {...props}>
      <GlobalStyle />
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={"http://localhost:3000"}
        audience={"http://localhost:8000"}
      >
        <AppContext.Provider
          value={{
            menuIsOpen,
            setMenuIsOpen,
            projects,
            setProjects,
            showOverlay,
            setShowOverlay,
            refresh,
            setRefresh,
            project,
            setProject,
            membershipsCount,
            setMembershipsCount,
            hint,
            setHint,
            profiles,
            setProfiles,
            profile,
            setProfile,
            me,
            setMe,
          }}
        >
          <Routes>
            <Route element={<Root />} path="/" />
            <Route element={<Projects />} path="/projects" />
            <Route element={<Project />} path="/projects/:projectId" />
            <Route element={<Bugs />} path="/projects/:projectId/bugs" />
            <Route element={<Bug />} path="/projects/:projectId/bugs/:index" />
            <Route element={<Members />} path="/projects/:projectId/members" />
            <Route element={<Edit />} path="/projects/:projectId/edit" />
            <Route element={<Connections />} path="/connections" />
            <Route element={<Profiles />} path="/profiles" />
            <Route element={<Profile />} path="/profiles/:userId" />
          </Routes>
        </AppContext.Provider>
      </Auth0Provider>
    </Wrapper>
  );
};

export default App;
