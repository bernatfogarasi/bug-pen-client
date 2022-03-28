import useApp from "hooks/useApp";
import styled, { css } from "styled-components";

import Buttons from "./Buttons";
import Logo from "./Logo";

const Wrapper = styled.div`
  display: contents;
  border: 1px solid;
  & > div {
    ${({ open }) =>
      open
        ? css`
            width: 300px;
          `
        : css`
            width: 100px;
          `}
    border-right: 1px solid #ccc;
    box-sizing: border-box;
    transition: 0.5s;
    background: #ececec;
  }
`;

const Menu = ({ className, ...props }) => {
  const { menuIsOpen } = useApp();
  return (
    <Wrapper className={className} open={menuIsOpen} {...props}>
      <Logo />
      <Buttons />
    </Wrapper>
  );
};

export default Menu;
