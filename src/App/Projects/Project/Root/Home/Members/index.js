import Section from "components/Section";
import useApp from "hooks/useApp";
import styled from "styled-components";
import Member from "./Member";

const Wrapper = styled(Section)`
  /* display: grid;
  grid-template-columns: auto auto;
  @media (min-width: 800px) {
    grid-template-columns: auto auto auto;
  }
  @media (min-width: 100px) {
    grid-template-columns: auto auto auto auto;
  } */
`;

const Members = ({ className, ...props }) => {
  const { project } = useApp();
  return (
    <Wrapper className={className} title="Members" {...props}>
      {project.members.map((member, index) => (
        <Member key={member.id} member={member} index={index} />
      ))}
    </Wrapper>
  );
};

export default Members;
