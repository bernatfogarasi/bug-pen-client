import styled from "styled-components";
import Option from "components/Option";

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
