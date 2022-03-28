import Page from "components/Page";
import styled from "styled-components";

import Attributes from "./Attributes";
import Bugs from "./Bugs";
import Buttons from "./Buttons";
import Members from "./Members";

const Wrapper = styled(Page)`
  display: grid;
  grid-auto-rows: min-content;
  gap: 40px;
  padding: 10px;
  box-sizing: border-box;
`;

const Color = styled.div`
  margin: -10px;
  background: #00bfa6;
  height: 20px;
`;

const Home = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Color />
      <Attributes />
      <Buttons />
      <Members />
      <Bugs />
    </Wrapper>
  );
};

export default Home;
