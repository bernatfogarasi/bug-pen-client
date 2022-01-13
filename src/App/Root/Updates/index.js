import styled from "styled-components";
import Update from "./Update";

const Wrapper = styled.div``;

const Title = styled.div``;

const Content = styled.div``;

const Updates = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Title>Latest updates</Title>
      <Content>
        <Update></Update>
        <Update></Update>
        <Update></Update>
        <Update></Update>
      </Content>
    </Wrapper>
  );
};

export default Updates;
