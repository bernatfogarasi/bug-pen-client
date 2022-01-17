import useApp from "hooks/useApp";
import useRequest from "hooks/useRequest";
import { useEffect } from "react";
import Home from "./Home";

const Bugs = ({ className, ...props }) => {
  const { project, refresh } = useApp();

  const { get } = useRequest();

  const projectId = window.location.pathname
    .split("/")
    .filter((item) => item)
    .at(-2);

  useEffect(() => {
    get(`/project-get?projectId=${projectId}`);
  }, [refresh]);

  return project ? <Home /> : <></>;
};

export default Bugs;
