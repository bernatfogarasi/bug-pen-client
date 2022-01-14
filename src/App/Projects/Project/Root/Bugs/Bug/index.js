import styled from "styled-components";
import Title from "./Title";
import Tags from "./Tags";
import Assignees from "./Assignees";
import Description from "./Description";
import Attachments from "./Attachments";
import Priority from "./Priority";
import Reporter from "./Reporter";
import Reproducible from "./Reproducible";
import Severity from "./Severity";
import TableRow from "components/TableRow";

const Wrapper = styled(TableRow)``;

const Bug = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Title>Sidebar</Title>
      <Description>
        Not collapsing properly, and projects not appearing.
      </Description>
      <Attachments></Attachments>
      <Tags></Tags>
      <Assignees></Assignees>
      <Priority></Priority>
      <Reporter></Reporter>
      <Reproducible></Reproducible>
      <Severity></Severity>
    </Wrapper>
  );
};

export default Bug;
