import Page from "components/Page";
import useApp from "hooks/useApp";
import styled from "styled-components";
import Project from "./Project";

const Wrapper = styled(Page)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 10px;
  box-sizing: border-box;
`;

const Home = ({ className, ...props }) => {
  const { projects } = useApp();

  return (
    <Wrapper className={className} {...props}>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </Wrapper>
  );
};

export default Home;
