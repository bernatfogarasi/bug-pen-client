import styled from "styled-components";

const Wrapper = styled.div`
  font-family: MontserratSemibold;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const First = styled.div`
  font-size: 1.5vw;
  opacity: 0.5;
`;

const Second = styled.div`
  font-size: 2vw;
  opacity: 0.9;
`;

const Third = styled.div`
  font-size: 3vw;
`;

const Welcome = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <First>Teamwork.</First>
      <Second>Efficiency.</Second>
      <Third>BugPen.</Third>
    </Wrapper>
  );
};

export default Welcome;
