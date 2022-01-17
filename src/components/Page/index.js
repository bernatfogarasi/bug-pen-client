import styled from "styled-components";
import Content from "./Content";
import Menu from "./Menu";
// import ModalOpen from "./ModalOpen";
// import ModalsMinimized from "./ModalsMinimized";
import TopBar from "./TopBar";
import Hint from "./Hint";
import useApp from "hooks/useApp";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
  max-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;

const Page = ({ className, children, ...props }) => {
  const { hint } = useApp();
  return (
    <Wrapper {...props}>
      <Menu />
      <TopBar />
      {hint && <Hint />}
      <Content className={className}>{children}</Content>
      {/* <ModalOpen />
      <ModalsMinimized /> */}
    </Wrapper>
  );
};

export default Page;
