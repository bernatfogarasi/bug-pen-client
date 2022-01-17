import styled, { css } from "styled-components";
import Button from "./Button";
import imageProjects from "assets/icons/projects.png";
import imageProfiles from "assets/icons/profiles.png";
import imageHome from "assets/icons/house.png";
import { useAuth0 } from "@auth0/auth0-react";
import useApp from "hooks/useApp";

const Wrapper = styled.div`
  grid-row: 2;
  grid-column: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const Buttons = ({ className, ...props }) => {
  const { user } = useAuth0();
  const { menuIsOpen } = useApp();
  return (
    <Wrapper className={className} open={menuIsOpen} {...props}>
      <Button to="/" src={imageHome}>
        Home
      </Button>
      <Button to="/projects" src={imageProjects}>
        Projects
      </Button>
      <Button to="/connections" src={imageProfiles}>
        Connections
      </Button>
    </Wrapper>
  );
};

export default Buttons;