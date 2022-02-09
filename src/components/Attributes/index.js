import Section from "components/Section";
import styled from "styled-components";
import Attribute from "./Attribute";

const Wrapper = styled(Section)`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1px;
  padding: 1px;
  background: #333;
  margin: auto;
`;

const Row = styled.div`
  display: table-column;
`;

const Attributes = ({ className, attributes = {}, ...props }) => {
  return (
    <Wrapper className={className} title="Info" {...props}>
      {Object.entries(attributes).map(([label, content]) => (
        <Attribute key={label} label={label}>
          {content}
        </Attribute>
      ))}
      {Object.entries(attributes).length % 2 === 0 ? null : <Attribute />}
    </Wrapper>
  );
};

export default Attributes;
