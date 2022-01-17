import Empty from "./Empty";
import useApp from "hooks/useApp";
import Home from "./Home";
import { useEffect } from "react";
import useRequest from "hooks/useRequest";

const Projects = ({ className, ...props }) => {
  const { projects, refresh } = useApp();
  const { get } = useRequest();

  useEffect(() => {
    get("/projects-my");
  }, [refresh]);

  return projects?.length ? <Home /> : <Empty />;
};

export default Projects;
