import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Date = styled.div``;

const Title = styled.div``;

const Description = styled.div``;

const Update = ({
  className,
  date = "-",
  title = "-",
  description = "-",
  ...props
}) => {
  return (
    <Wrapper className={className} {...props}>
      <Date>{date}</Date>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default Update;
