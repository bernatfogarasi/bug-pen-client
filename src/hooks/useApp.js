import { AppContext } from "context";
import { useContext } from "react";

const useApp = () => {
  const context = useContext(AppContext);
  return context;
};

export default useApp;
