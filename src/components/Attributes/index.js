import Attribute from "./Attribute";
import SectionGrid from "components/SectionGrid";
import styled from "styled-components";

const Wrapper = styled(SectionGrid)``;

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
