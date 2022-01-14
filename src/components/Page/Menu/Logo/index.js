import useApp from "hooks/useApp";
import useDelay from "hooks/useDelay";
import styled from "styled-components";
import Close from "./Close";
import Image from "./Image";
import Title from "./Title";

const Wrapper = styled.div`
  grid-row: 1;
  grid-column: 1;
  display: flex;
  align-items: center;
  padding: 20px;
  background: white !important;
  cursor: pointer;
`;

const Logo = ({ className, ...props }) => {
  const { menuIsOpen, setMenuIsOpen } = useApp();

  const menuIsOpenDelayed = useDelay(menuIsOpen, 200);

  const onClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <Wrapper className={className} {...props} onClick={onClick}>
      <Image />
      {menuIsOpen && menuIsOpenDelayed && <Title />}
      <Close />
    </Wrapper>
  );
};

export default Logo;
