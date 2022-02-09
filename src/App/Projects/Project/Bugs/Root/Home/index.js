import Page from "components/Page";
import useApp from "hooks/useApp";
import styled from "styled-components";
import Bug from "./Bug";

const Wrapper = styled(Page)`
  display: grid;
  grid-template-columns: auto;
  grid-auto-rows: min-content;
  gap: 5px;
  padding: 10px;
`;

const Home = ({ className, ...props }) => {
  const { project } = useApp();

  return (
    <Wrapper className={className} reportBug {...props}>
      {project.bugs
        .slice(-3)
        .map((bug, index) => <Bug key={bug.id} bug={bug} index={index} />)
        .reverse()}
    </Wrapper>
  );
};

export default Home;
