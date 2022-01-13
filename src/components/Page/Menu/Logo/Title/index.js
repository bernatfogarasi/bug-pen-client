import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 20px;
  font-family: MontserratSemibold;
  color: #ff4059;
`;

const Title = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      BugPen
    </Wrapper>
  );
};

export default Title;
