import { useAuth0 } from "@auth0/auth0-react";

import Home from "./Home";
import NoAuthentication from "./NoAuthentication";

const Profiles = ({ className, ...props }) => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <Home /> : <NoAuthentication />;
};

export default Profiles;
