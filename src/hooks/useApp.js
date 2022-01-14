import { AppContext } from "context";
import { useContext } from "react";

const useApp = () => {
  return useContext(AppContext);
};

export default useApp;
