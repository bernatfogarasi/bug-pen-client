import Empty from "./Empty";
import useApp from "hooks/useApp";
import Home from "./Home";
import { useEffect, useState } from "react";
import useRequest from "hooks/useRequest";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingPage from "components/LoadingPage";

const Projects = ({ className, ...props }) => {
  const { projects, refresh } = useApp();
  const { get } = useRequest();
  const { isAuthenticated } = useAuth0();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) return;
    get("/projects-my", () => setLoading(false));
  }, [refresh, isAuthenticated]);

  return loading ? <LoadingPage /> : projects?.length ? <Home /> : <Empty />;
};

export default Projects;
