import Option from "components/Option";
import styled from "styled-components";

const Wrapper = styled(Option)``;

const Project = ({ className, project, index, ...props }) => {
  const allowed = ["Administrator", "Director"].includes(project.authorization);
  return (
    <Wrapper className={className} value={project.projectId} {...props}>
      {project.title}
      {allowed ? "" : " - NO AUTHORIZATION"}
    </Wrapper>
  );
};

export default Project;
