import styled from "styled-components";

import Button from "./Button";

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
      <Button to={window.location.pathname + "/edit"}>Edit</Button>
    </Wrapper>
  );
};

export default Buttons;
