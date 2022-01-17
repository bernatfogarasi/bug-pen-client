import styled from "styled-components";
import Attribute from "./Attribute";

const Wrapper = styled.div`
  grid-row: 2;
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  align-items: center;
`;

const Attributes = ({ className, bug, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Attribute label="description">{bug.description}</Attribute>
      <Attribute label="tags">{bug.tags}</Attribute>
      <Attribute label="assignees">{bug.assignees}</Attribute>
      <Attribute label="attachments">{bug.attachments}</Attribute>
      <Attribute label="priority">{bug.priority}</Attribute>
      <Attribute label="reporter">{bug.reporter.name}</Attribute>
      <Attribute label="reproducible">{bug.reproducible}</Attribute>
      <Attribute label="impact">{bug.impact}</Attribute>
      <Attribute label="ugrency">{bug.urgency}</Attribute>
    </Wrapper>
  );
};

export default Attributes;
