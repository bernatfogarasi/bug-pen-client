import { titleFont } from "functions/text";
import styled from "styled-components";

const Wrapper = styled.div`
  display: contents;
`;

const Text = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Label = styled(Text)`
  opacity: 0.6;
  width: 130px;
  max-width: 130px;
`;

const Content = styled(Text)`
  max-width: 200px;
`;

const Attribute = ({ className, label, ...props }) => {
  label = label ? titleFont(label) : "-";
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Content className={className} {...props} />
    </Wrapper>
  );
};

export default Attribute;
