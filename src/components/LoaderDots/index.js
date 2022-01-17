import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & > div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #454b69;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  & > div:nth-child(1) {
    left: 8px;
    animation: loader-dots-1 0.6s infinite;
  }
  & > div:nth-child(2) {
    left: 8px;
    animation: loader-dots-2 0.6s infinite;
  }
  & > div:nth-child(3) {
    left: 32px;
    animation: loader-dots-2 0.6s infinite;
  }
  & > div:nth-child(4) {
    left: 56px;
    animation: loader-dots-3 0.6s infinite;
  }
  @keyframes loader-dots-1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes loader-dots-2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
  @keyframes loader-dots-3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;

const LoaderDots = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Wrapper>
  );
};

export default LoaderDots;
