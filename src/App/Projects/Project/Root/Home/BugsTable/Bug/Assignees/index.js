import TableCell from "components/TableCell";
import styled from "styled-components";
import Assignee from "./Assignee";

const Wrapper = styled(TableCell)``;

const Assignees = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Assignees;
