import { useAuth0 } from "@auth0/auth0-react";
import LoadingScreen from "components/LoadingScreen";
import useApp from "hooks/useApp";
import useRequest from "hooks/useRequest";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Content from "./Content";
import Hint from "./Hint";
import Menu from "./Menu";
import TopBar from "./TopBar";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
  max-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;

const Page = ({ className, children, ...props }) => {
  const [loadingMe, setLoadingMe] = useState(true);
  const { hint, me } = useApp();
  const { isLoading, user } = useAuth0();
  const { get } = useRequest();

  useEffect(() => {
    if (!me) get("/me", () => setLoadingMe(false));
    console.log(me);
    console.log(user);
  }, [me]);

  return isLoading && !me ? (
    <LoadingScreen />
  ) : (
    <Wrapper>
      <Menu {...props} />
      <TopBar {...props} />
      {hint && <Hint />}
      <Content className={className}>{children}</Content>
    </Wrapper>
  );
};

export default Page;
