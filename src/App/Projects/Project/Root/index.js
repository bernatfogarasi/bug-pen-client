import LoadingPage from "components/LoadingPage";
import useApp from "hooks/useApp";
import useRequest from "hooks/useRequest";
import { useEffect, useState } from "react";
import Home from "./Home";

const Project = () => {
  const { get } = useRequest();

  const { refresh, project, setProject } = useApp();

  const [loading, setLoading] = useState(true);

  const projectId = window.location.pathname
    .split("/")
    .filter((item) => item)
    .at(-1);

  useEffect(() => {
    get(`/project-get?projectId=${projectId}`, () => setLoading(false));
    return setProject(undefined);
  }, [refresh]);

  return loading ? <LoadingPage /> : project ? <Home /> : <></>;
};

export default Project;
