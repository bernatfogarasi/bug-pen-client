import useApp from "hooks/useApp";
import useDelay from "hooks/useDelay";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  height: 30px;
  color: inherit;
  text-decoration: none;
  gap: 20px;
  padding: 10px 20px;
  cursor: pointer;
  :hover {
    background: #ccc;
  }
  transition: 0.3s;
  ${({ open }) =>
    open
      ? css``
      : css`
          font-size: 0px;
          padding: 20px;
        `}
  ${({ selected }) =>
    selected
      ? css`
          background: #ccc;
        `
      : css``}
`;

const Image = styled.img`
  height: 100%;
  ${({ open }) =>
    open
      ? css`
          margin: 0;
        `
      : css`
          margin: 15px;
        `}
  transition: 0.2s
`;

const Content = styled.div`
  animation: 0.2s grow;
`;

const Button = ({
  className,
  children,
  image,
  src,
  to = "#",
  title,
  ...props
}) => {
  const { menuIsOpen } = useApp();

  const menuIsOpenDelayed = useDelay(menuIsOpen, 200);

  const selected = Boolean(
    window.location.pathname === to ||
      (window.location.pathname.startsWith(to) && to !== "/")
  );

  return (
    <Wrapper
      className={className}
      to={to}
      open={menuIsOpen && menuIsOpenDelayed}
      title={menuIsOpen ? "" : title}
      selected={selected}
      {...props}
    >
      {image || <Image src={src} open={menuIsOpen && menuIsOpenDelayed} />}
      {menuIsOpen && menuIsOpenDelayed && <Content>{title}</Content>}
    </Wrapper>
  );
};

export default Button;
