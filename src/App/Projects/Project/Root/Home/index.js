import Page from "components/Page";
import styled from "styled-components";
import Attributes from "./Attributes";
import Bugs from "./Bugs";
import Members from "./Members";
import ButtonAnimated from "components/ButtonAnimated";

const Wrapper = styled(Page)`
  display: grid;
  grid-auto-rows: min-content;
  gap: 20px;
  padding: 10px;
  box-sizing: border-box;
`;

const Color = styled.div`
  margin: -10px;
  margin-bottom: 0;
  background: #00bfa6;
  height: 20px;
`;

const ViewAll = styled(ButtonAnimated)`
  margin: auto;
`;

const Home = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Color />
      <Attributes />
      <Members />
      <Bugs />
      <ViewAll to={window.location.pathname + "/bugs"}>View all bugs</ViewAll>
    </Wrapper>
  );
};

export default Home;
