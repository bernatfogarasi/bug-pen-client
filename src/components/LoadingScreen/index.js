import LoaderDots from "components/LoaderDots";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingScreen = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <LoaderDots />
    </Wrapper>
  );
};

export default LoadingScreen;
