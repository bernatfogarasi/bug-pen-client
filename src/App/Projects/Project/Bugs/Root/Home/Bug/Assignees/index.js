import styled from "styled-components";
import Assignee from "./Assignee";

const Wrapper = styled.div``;

const Assignees = ({ className, children, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      Assigned to: {children}
    </Wrapper>
  );
};

export default Assignees;
