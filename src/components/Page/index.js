import { PageContext } from "context";
import useApp from "hooks/useApp";
import { useState } from "react";
import styled, { css } from "styled-components";
import Main from "./Main";
import MenuRaw from "./Menu";

const Wrapper = styled.div`
  /* display: grid;
  grid-template-rows: 100vh; */
  ${({ open }) =>
    open
      ? css`
          --menu-width: 200px;
        `
      : css`
          --menu-width: 50px;
        `}
  transition: 1s;
  /* grid-template-columns: var(--menu-width) calc(100vw - var(--menu-width)); */

  /* display: flex;
  height: 100vh;
  width: 100vw; */
  display: flex;
  overflow: hidden;
`;

const Menu = styled(MenuRaw)`
  grid-column: 1;
`;

const Page = ({
  className: contentClassName,
  children: contentChildren,
  ...props
}) => {
  const { menuIsOpen } = useApp();
  return (
    <Wrapper open={menuIsOpen} {...props}>
      <Menu />
      <Main
        contentClassName={contentClassName}
        contentChildren={contentChildren}
      />
    </Wrapper>
  );
};

export default Page;
