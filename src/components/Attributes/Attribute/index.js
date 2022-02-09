import { titleFont } from "functions/text";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background: white;
  padding: 10px;
`;

const Text = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Label = styled(Text)`
  width: 130px;
  opacity: 0.6;
  max-width: 130px;
`;

const Content = styled(Text)`
  max-width: 200px;
`;

const Attribute = ({ className, label, children, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Label>{label ? titleFont(label) : ""}</Label>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Attribute;
