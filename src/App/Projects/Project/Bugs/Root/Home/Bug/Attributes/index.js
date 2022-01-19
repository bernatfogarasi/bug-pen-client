import styled from "styled-components";
import Attribute from "./Attribute";
import Boolean from "./Boolean";
import Scale from "./Scale";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto;
  gap: 5px;
  align-items: center;
`;

const Attributes = ({ className, bug, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Attribute label="assignees">
        {bug.assignees?.length && bug.assignees}
      </Attribute>
      <Attribute label="attachments">{bug.attachments?.length}</Attribute>
      <Attribute label="impact">
        <Scale index={bug.impact} />
      </Attribute>
      <Attribute label="urgency">
        <Scale index={bug.urgency} />
      </Attribute>
      <Attribute label="reproducible">
        <Boolean>{bug.reproducible}</Boolean>
        {console.log(bug.reproducible)}
      </Attribute>
      <Attribute label="reporter">{bug.reporter.name}</Attribute>
    </Wrapper>
  );
};

export default Attributes;
