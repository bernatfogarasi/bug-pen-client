import styled, { css } from "styled-components";
import Button from "./Button";
import imageProjects from "assets/icons/projects2.png";
import imageProfiles from "assets/icons/profiles.png";
import imageProfile from "assets/icons/profile2.png";
import imageHome from "assets/icons/house.png";
import { useAuth0 } from "@auth0/auth0-react";
import useApp from "hooks/useApp";
import Logout from "./Logout";

const Wrapper = styled.div`
  grid-row: 2;
  grid-column: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const Buttons = ({ className, ...props }) => {
  const { user, isAuthenticated } = useAuth0();
  const { menuIsOpen } = useApp();
  return (
    <Wrapper className={className} open={menuIsOpen} {...props}>
      <Button to="/" title="Home" src={imageHome} />
      <Button to="/projects" title="Projects" src={imageProjects} />
      <Button to="/connections" title="Connections" src={imageProfiles} />
      <Button to="/profiles" title="Profiles" src={imageProfile} />
      {isAuthenticated ? <Logout /> : null}
    </Wrapper>
  );
};

export default Buttons;
