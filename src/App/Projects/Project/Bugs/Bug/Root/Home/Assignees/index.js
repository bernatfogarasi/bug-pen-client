import SectionGrid from "components/SectionGrid";
import styled from "styled-components";

import Assignee from "./Assignee";

const Wrapper = styled(SectionGrid)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const Assignees = ({ className, bug, ...props }) => {
  return (
    <Wrapper className={className} title="assignees" {...props}>
      {bug.assignees
        .sort((assignee1, assignee2) =>
          assignee1.title > assignee2.title ? 1 : -1
        )
        .map((assignee, index) => (
          <Assignee
            key={assignee.id}
            assignee={assignee}
            index={index}
            bug={bug}
          />
        ))}
    </Wrapper>
  );
};

export default Assignees;
