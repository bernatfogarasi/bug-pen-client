import Link from "components/Link";
import styled from "styled-components";

const Wrapper = styled.div``;

const Name = styled(Link)`
  text-decoration: underline;
  color: #00bfa6;
`;

const Content = styled.div``;

const Assignees = ({ className, children, bug, ...props }) => {
  const onMouseOver = (event) => {
    event.stopPropagation();
  };
  return (
    <Wrapper className={className} {...props}>
      {bug.assignees?.length ? (
        <>
          Assigned to:
          <Content>
            {bug.assignees.map((assignee) => (
              <Name
                to={`/profiles/${assignee.userId}`}
                onMouseOver={onMouseOver}
              >
                {assignee.name}
              </Name>
            ))}
          </Content>
        </>
      ) : (
        <>Not assigned</>
      )}
    </Wrapper>
  );
};

export default Assignees;
