import styled from "styled-components";

const Wrapper = styled.div`
  height: 200px;
  border: 1px solid;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Project = ({ className, project, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {project.title}
    </Wrapper>
  );
};

export default Project;
