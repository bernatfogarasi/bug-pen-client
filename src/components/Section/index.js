import styled from "styled-components";
import { titleFont } from "functions/text";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-family: MontserratSemibold;
`;

const Content = styled.div`
  padding: 1px;
  box-sizing: border-box;
`;

const Section = ({ className, title, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Title>{title ? titleFont(title) : title}</Title>
      <Content className={className}>{children}</Content>
    </Wrapper>
  );
};

export default Section;
