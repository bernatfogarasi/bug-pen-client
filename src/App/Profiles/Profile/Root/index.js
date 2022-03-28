import LoadingPage from "components/LoadingPage";
import Page from "components/Page";
import useApp from "hooks/useApp";
import useRequest from "hooks/useRequest";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Home from "./Home";

const Wrapper = styled(Page)`
  display: flex;
  flex-direction: column;
`;

const Profile = ({ className, ...props }) => {
  const { profile, refresh } = useApp();

  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingProfile, setLoadingProfile] = useState(true);

  const { get } = useRequest();

  useEffect(() => {
    const userId = window.location.pathname
      .split("/")
      .filter((item) => item)
      .at(-1);
    get(`/profile-get?userId=${userId}`, () => setLoadingProfile(false));
    get("/projects-my", () => setLoadingProjects(false));
  }, [refresh]);

  return loadingProfile || loadingProjects ? (
    <LoadingPage />
  ) : (
    <Wrapper className={className} add {...props}>
      {profile ? <Home /> : <>Not found</>}
    </Wrapper>
  );
};

export default Profile;
