import useRequest from "hooks/useRequest";
import useApp from "hooks/useApp";
import { useEffect, useState } from "react";
import LoadingPage from "components/LoadingPage";
import Home from "./Home";

const Bug = ({ className, ...props }) => {
  const [loading, setLoading] = useState(true);

  const { project, refresh } = useApp();

  const { get } = useRequest();

  useEffect(() => {
    get(
      `/project-get?projectId=${window.location.pathname.split("/")[2]}`,
      () => setLoading(false)
    );
  }, [refresh]);

  const index = Number(window.location.pathname.split("/")[4]);

  const bug = project?.bugs?.filter((bug) => bug.index === index)[0];

  return loading || !bug ? <LoadingPage /> : <Home bug={bug} />;
};

export default Bug;
