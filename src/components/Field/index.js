import { titleFont } from "functions/text";
import styled from "styled-components";

const Wrapper = styled.div``;

const Label = styled.div`
  opacity: 0.6;
`;

const Changed = styled.div`
  margin-right: auto;
  color: orange;
`;

const Field = ({ className, label, changed, children, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Label changed={changed}>{label ? titleFont(label) : ""}</Label>
      {changed ? <Changed>(not saved)</Changed> : null}
      {children}
    </Wrapper>
  );
};

export default Field;
