import useApp from "hooks/useApp";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  height: 200px;
  width: 200px;
  top: 0;
  left: 0;
  background: red;
  z-index: 1;
  ${({ show }) =>
    show
      ? css``
      : css`
          display: none;
        `}
`;

const Overlay = ({ className, ...props }) => {
  const { showOverlay } = useApp();
  return (
    <Wrapper className={className} show={showOverlay} {...props}></Wrapper>
  );
};

export default Overlay;
