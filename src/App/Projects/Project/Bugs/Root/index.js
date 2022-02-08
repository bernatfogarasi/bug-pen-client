import LoadingPage from "components/LoadingPage";
import useApp from "hooks/useApp";
import useRequest from "hooks/useRequest";
import { useEffect, useState } from "react";
import Home from "./Home";

const Bugs = ({ className, ...props }) => {
  const { project, refresh } = useApp();

  const { get } = useRequest();

  const [loading, setLoading] = useState(true);

  const projectId = window.location.pathname
    .split("/")
    .filter((item) => item)
    .at(-2);

  useEffect(() => {
    get(`/project-get?projectId=${projectId}`, () => setLoading(false));
  }, [refresh]);

  return loading ? <LoadingPage /> : project ? <Home /> : <></>;
};

export default Bugs;
