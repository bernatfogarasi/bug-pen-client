import styled from "styled-components";

const Wrapper = styled.div`
  font-family: MontserratSemibold;
  color: #454b69;
  font-size: 3vw;
`;

const Welcome = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      Track your bugs with BugPen
    </Wrapper>
  );
};

export default Welcome;
