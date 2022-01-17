import styled from "styled-components";
import Assignee from "./Assignee";

const Wrapper = styled.div``;

const Assignees = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Assignees;
