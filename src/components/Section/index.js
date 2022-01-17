import { titleFont } from "functions/text";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const Title = styled.div`
  font-family: MontserratSemibold;
`;

const Content = styled.div``;

const Section = ({ className, title, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Title>{title ? titleFont(title) : title}</Title>
      <Content className={className}>{children}</Content>
    </Wrapper>
  );
};

export default Section;
