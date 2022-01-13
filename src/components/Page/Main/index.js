import styled from "styled-components";
import Content from "./Content";
import TopBar from "./TopBar";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = ({ className, contentClassName, contentChildren, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <TopBar />
      <Content className={contentClassName}>{contentChildren}</Content>
    </Wrapper>
  );
};

export default Main;
