import Page from "components/Page2";
import styled from "styled-components";
import Bugs from "./Bugs";

const Wrapper = styled(Page)`
  height: 100%;
  width: 100%;
`;

const Projects = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Bugs />
    </Wrapper>
  );
};

export default Projects;
