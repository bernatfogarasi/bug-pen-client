import styled, { css } from "styled-components";
import Logo from "./Logo";
import Close from "./Close";
import useApp from "hooks/useApp";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ececee;
  box-sizing: border-box;
  padding: 10px;
  gap: 10px;
  ${({ open }) =>
    open
      ? css`
          --menu-width: 200px;
        `
      : css`
          --menu-width: 50px;
        `}
  transition: 0.2s;
  width: var(--menu-width);
`;

const Menu = ({ className, ...props }) => {
  const { menuIsOpen } = useApp();
  return (
    <Wrapper className={className} open={menuIsOpen} {...props}>
      <Close />
      <Logo />
    </Wrapper>
  );
};

export default Menu;
