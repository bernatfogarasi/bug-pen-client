import Text from "components/Text";
import { titleFont } from "functions/text";
import styled from "styled-components";

const Wrapper = styled.div`
  display: contents;
`;

const Label = styled(Text)`
  opacity: 0.6;
  font-size: 10px;
  max-width: 130px;
`;

const Content = styled(Text)`
  max-width: 200px;
  font-size: 10px;
`;

const Attribute = ({ className, label, children, ...props }) => {
  const labelFormatted = label ? titleFont(label) : "-";
  return label ? (
    <Wrapper>
      <Label>{labelFormatted}:</Label>
      <Content className={className} {...props}>
        {children || "-"}
      </Content>
    </Wrapper>
  ) : (
    <Content className={className} {...props}>
      {children || "-"}
    </Content>
  );
};

export default Attribute;
