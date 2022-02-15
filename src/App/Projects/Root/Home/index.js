import Page from "components/Page";
import Project from "./Project";
import styled from "styled-components";
import useApp from "hooks/useApp";

const Wrapper = styled(Page)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  grid-auto-rows: min-content;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
`;

const Home = ({ className, ...props }) => {
  const { projects } = useApp();

  return (
    <Wrapper className={className} createProject {...props}>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </Wrapper>
  );
};

export default Home;
