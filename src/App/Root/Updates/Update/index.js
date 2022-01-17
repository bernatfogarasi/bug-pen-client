import styled from "styled-components";

const Wrapper = styled.div`
  display: contents;
`;

const Date = styled.div`
  font-size: 12px;
`;

const Title = styled.div``;

const Description = styled.div`
  font-size: 12px;
`;

const Update = ({ className, update, index, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Date>{update.date}</Date>
      <Title>{update.title}</Title>
      <Description>{update.description}</Description>
    </Wrapper>
  );
};

export default Update;
