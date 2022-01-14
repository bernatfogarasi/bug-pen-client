import Empty from "./Empty";
import useApp from "hooks/useApp";
import Home from "./Home";
import { useEffect } from "react";
import useRequest from "hooks/useRequest";

const Projects = ({ className, ...props }) => {
  const { projects, setProjects, refresh } = useApp();
  const { get } = useRequest();

  useEffect(() => {
    const fetchData = async () => {
      const response = await get("/projects-my");
      setProjects(response?.json?.data);
    };
    fetchData();
  }, [refresh]);

  return projects?.length ? <Home /> : <Empty />;
};

export default Projects;
