import imageArrow from "assets/icons/arrow.png";
import useApp from "hooks/useApp";
import styled from "styled-components";
import { css } from "styled-components";

const Wrapper = styled.img`
  width: 40px;
  display: block;
  margin-left: auto;
  padding: 10px;
  box-sizing: border-box;
  ${({ open }) =>
    open
      ? css`
          transform: rotate(180deg);
        `
      : css``}
  transition: 0.5s;
  cursor: pointer;
`;

const Close = ({ className, ...props }) => {
  const { menuIsOpen } = useApp();

  return (
    <Wrapper
      className={className}
      src={imageArrow}
      open={menuIsOpen}
      {...props}
    ></Wrapper>
  );
};

export default Close;
