import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 20px;
  font-family: MontserratSemibold;
  animation: 0.2s grow;
  color: #00bfa6;
  margin-left: 15px;
`;

const Title = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      BugPen
    </Wrapper>
  );
};

export default Title;
