import ButtonSmall from "components/ButtonSmall";
import Tag__ from "components/Tag";
import useApp from "hooks/useApp";
import useRequest from "hooks/useRequest";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Tag_ = styled(Tag__)`
  margin-right: auto;
`;

const Remove = styled(ButtonSmall)``;

const Tag = ({ className, tag, index, bug, ...props }) => {
  const { post } = useRequest();

  const { project } = useApp();

  const [loading, setLoading] = useState(false);

  const onRemove = () => {
    setLoading(true);
    post(
      `/mark-remove?projectId=${project.projectId}&bugId=${bug.id}&tagId=${tag.id}`,
      () => setLoading(false)
    );
  };

  return (
    <Wrapper className={className} {...props}>
      {/* {index + 1} */}
      <Tag_ {...tag} />
      <Remove loading={loading} onClick={onRemove}>
        Remove
      </Remove>
    </Wrapper>
  );
};

export default Tag;
