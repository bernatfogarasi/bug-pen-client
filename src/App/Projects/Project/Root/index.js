import useApp from "hooks/useApp";
import useRequest from "hooks/useRequest";
import { useEffect } from "react";
import Home from "./Home";

const Project = () => {
  const { get } = useRequest();

  const { refresh, project } = useApp();

  const projectId = window.location.pathname
    .split("/")
    .filter((item) => item)
    .at(-1);

  useEffect(() => {
    get(`/project-get?projectId=${projectId}`);
  }, [refresh]);

  // useEffect(() => {
  //   return setProject(undefined);
  // }, []);

  return project ? <Home /> : <></>;
};

export default Project;
