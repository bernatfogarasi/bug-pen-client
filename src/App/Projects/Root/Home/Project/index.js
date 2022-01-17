import Link from "components/Link";
import styled from "styled-components";

const Wrapper = styled(Link)`
  display: grid;
  grid-template-columns: auto auto auto;
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

const Creator = styled.div`
  grid-row: 3;
  grid-column: 2 / 4;
  align-self: flex-end;
  color: #00bfa6;
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
`;

const members = ["John", "Emily", "Adam", "Ben", "David"];

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
      <Members>
        {members.length > 4
          ? `${members.slice(0, 3).join(", ")} + ${members.length - 3} others`
          : members.join(", ")}
      </Members>
      <Creator>Created by you</Creator>
    </Wrapper>
  );
};

export default Project;
