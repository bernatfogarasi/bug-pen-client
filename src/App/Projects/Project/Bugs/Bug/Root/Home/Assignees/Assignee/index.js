import ButtonSmall from "components/ButtonSmall";
import useApp from "hooks/useApp";
import useRequest from "hooks/useRequest";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

const Remove = styled(ButtonSmall)``;

const Assignee = ({ className, assignee, index, bug, ...props }) => {
  const { post } = useRequest();

  const { project } = useApp();

  const [loading, setLoading] = useState(false);

  const onRemove = () => {
    setLoading(true);
    post(
      `/assign-remove?projectId=${project.projectId}&bugId=${bug.id}&userId=${assignee.userId}`,
      () => setLoading(false)
    );
  };

  return (
    <Wrapper className={className} {...props}>
      {assignee.name}
      <Remove loading={loading} onClick={onRemove}>
        Remove
      </Remove>
    </Wrapper>
  );
};

export default Assignee;
