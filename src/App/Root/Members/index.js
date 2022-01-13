import styled from "styled-components";

const Wrapper = styled.div``;

const Title = styled.div``;

const Content = styled.div``;

const Members = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Title>Members</Title>
      <Content></Content>
    </Wrapper>
  );
};

export default Members;
