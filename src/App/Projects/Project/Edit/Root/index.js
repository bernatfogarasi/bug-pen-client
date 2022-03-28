import LoadingPage from "components/LoadingPage";
import useApp from "hooks/useApp";
import useRequest from "hooks/useRequest";
import { useEffect, useState } from "react";

import Home from "./Home";

const Edit = ({ className, ...props }) => {
  const [loading, setLoading] = useState(true);

  const { get } = useRequest();

  const { refresh } = useApp();

  const projectId = window.location.pathname.split("/")[2];

  useEffect(() => {
    get(`/project-get?projectId=${projectId}`, () => setLoading(false));
  }, [refresh]);

  return loading ? <LoadingPage /> : <Home projectId={projectId} />;
};

export default Edit;
