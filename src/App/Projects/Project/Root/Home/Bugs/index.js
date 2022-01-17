import Section from "components/Section";
import useApp from "hooks/useApp";
import styled from "styled-components";
import Bug from "./Bug";

const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Bugs = ({ className, ...props }) => {
  const { project } = useApp();
  return (
    <Wrapper className={className} title="latest bugs" {...props}>
      {project.bugs
        .slice(-3)
        .map((bug, index) => <Bug key={bug.id} bug={bug} />)
        .reverse()}
    </Wrapper>
  );
};

export default Bugs;
