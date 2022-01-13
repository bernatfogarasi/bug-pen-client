import styled from "styled-components";
import Content from "./Content";
import Menu from "./Menu";
import TopBar from "./TopBar";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;

const Page2 = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Menu />
      <TopBar />
      <Content />
    </Wrapper>
  );
};

export default Page2;
