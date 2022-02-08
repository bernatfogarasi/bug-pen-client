import styled from "styled-components";
import Button from "./Button";
import EditMembers from "./EditMembers";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
`;

const Buttons = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Button to={window.location.pathname + "/bugs"}>Bugs</Button>
      <Button to={window.location.pathname + "/members"}>Members</Button>
      <Button to={window.location.pathname + "/settings"}>Settings</Button>
    </Wrapper>
  );
};

export default Buttons;
