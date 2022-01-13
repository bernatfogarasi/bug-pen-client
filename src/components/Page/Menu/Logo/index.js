import useApp from "hooks/useApp";
import styled from "styled-components";
import Image from "./Image";
import Title from "./Title";

const Wrapper = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 150px;
  margin: 0 auto;
`;

const Logo = ({ className, ...props }) => {
  const { menuIsOpen, setMenuIsOpen } = useApp();
  return (
    <Wrapper className={className} {...props}>
      <Image />
      {menuIsOpen && <Title />}
    </Wrapper>
  );
};

export default Logo;
