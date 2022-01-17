import Section from "components/Section";
import { extractTime } from "functions/text";
import useApp from "hooks/useApp";
import styled from "styled-components";
import Attribute from "./Attribute";

const Wrapper = styled(Section)`
  display: grid;
  --columns: 1;
  @media (min-width: 900px) {
    --columns: 2;
  }
  @media (min-width: 1100px) {
    --columns: 3;
  }
  *:nth-child(2n + 1) {
    margin-left: auto;
  }
  grid-template-columns: repeat(var(--columns), auto auto);
  gap: 10px;
  align-items: center;
`;

const Attributes = ({ className, ...props }) => {
  const { project } = useApp();

  return (
    <Wrapper className={className} title="Info" {...props}>
      <Attribute label="type">Project</Attribute>
      <Attribute label="title">{project.title}</Attribute>
      <Attribute label="created by">{project.creator.name}</Attribute>
      <Attribute label="created at">
        {extractTime(project.createdAt).join(" ")}
      </Attribute>
      <Attribute label="updated at">
        {extractTime(project.updatedAt).join(" ")}
      </Attribute>
      <Attribute label="Bug count">{project.bugs.length}</Attribute>
      <Attribute label="Member count">{project.members.length}</Attribute>
    </Wrapper>
  );
};

export default Attributes;
