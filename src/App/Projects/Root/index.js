import { useEffect, useState } from "react";

import Empty from "./Empty";
import Home from "./Home";
import LoadingPage from "components/LoadingPage";
import useApp from "hooks/useApp";
import { useAuth0 } from "@auth0/auth0-react";
import useRequest from "hooks/useRequest";

const Projects = ({ className, ...props }) => {
  const { projects, refresh } = useApp();
  const { get } = useRequest();
  const { isAuthenticated } = useAuth0();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) return;
    setLoading(true);
    get("/projects-my", () => setLoading(false));
  }, [refresh, isAuthenticated]);

  return loading ? <LoadingPage /> : projects?.length ? <Home /> : <Empty />;
};

export default Projects;
