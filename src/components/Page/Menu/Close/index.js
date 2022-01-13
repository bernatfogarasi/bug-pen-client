import styled from "styled-components";
import useApp from "hooks/useApp";
import imageArrow from "assets/icons/arrow.png";
import { css } from "styled-components";

const Wrapper = styled.img`
  width: 30px;
  display: block;
  margin-left: auto;
  ${({ open }) =>
    open
      ? css`
          transform: rotate(180deg);
        `
      : css``}
  transition: 0.2s;
`;

const Close = ({ className, ...props }) => {
  const { menuIsOpen, setMenuIsOpen } = useApp();

  const onClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <Wrapper
      className={className}
      src={imageArrow}
      open={menuIsOpen}
      onClick={onClick}
      {...props}
    ></Wrapper>
  );
};

export default Close;
