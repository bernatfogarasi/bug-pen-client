import LoadingPage from "components/LoadingPage";
import useApp from "hooks/useApp";
import useRequest from "hooks/useRequest";
import { useEffect, useState } from "react";

import Home from "./Home";

const Bug = ({ className, ...props }) => {
  const [loading, setLoading] = useState(true);

  const { project, refresh } = useApp();

  const { get } = useRequest();

  const projectId = window.location.pathname.split("/")[2];

  useEffect(() => {
    get(`/project-get?projectId=${projectId}`, () => setLoading(false));
  }, [refresh]);

  const index = Number(window.location.pathname.split("/")[4]);

  const bug = project?.bugs?.filter((bug) => bug.index === index)[0];

  return loading || !bug ? (
    <LoadingPage />
  ) : (
    <Home bug={bug} projectId={projectId} />
  );
};

export default Bug;
