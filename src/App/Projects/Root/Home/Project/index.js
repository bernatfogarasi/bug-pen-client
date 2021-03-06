import Link from "components/Link";
import styled from "styled-components";

const Wrapper = styled(Link)`
  display: grid;
  grid-template-columns: min-content auto auto;
  height: 200px;
  border: 1px solid;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  transition: 0.2s;
  :hover {
    transform: scale(1.03);
    background: #eee;
    cursor: pointer;
  }
  :active {
    background: #ccc;
  }
`;

const Type = styled.div`
  grid-row: 1;
  grid-column: 2;
  opacity: 0.6;
  font-size: 14px;
`;

const Title = styled.div`
  grid-row: 1;
  grid-column: 3;
  font-family: MontserratSemibold;
  text-align: right;
`;

const Members = styled.div`
  grid-row: 2;
  grid-column: 2 / 4;
`;

const Color = styled.div`
  grid-row: 1 / 4;
  grid-column: 1;
  background: #00bfa6;
  margin: -10px;
  margin-right: 10px;
  width: 20px;
`;

const Project = ({ className, project, ...props }) => {
  return (
    <Wrapper
      className={className}
      to={`/projects/${project?.projectId}`}
      {...props}
    >
      <Color />
      <Type>Project</Type>
      <Title>{project.title}</Title>
      <Members>Members: {project.memberCount}</Members>
    </Wrapper>
  );
};

export default Project;
