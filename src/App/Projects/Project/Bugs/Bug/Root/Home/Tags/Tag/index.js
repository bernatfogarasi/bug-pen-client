import ButtonSmall from "components/ButtonSmall";
import Link from "components/Link";
import Tag__ from "components/Tag";
import styled from "styled-components";
import useApp from "hooks/useApp";
import useRequest from "hooks/useRequest";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Text = styled.div`
  opacity: 0.6;
`;

const Name = styled(Link)`
  color: #00bfa6;
  text-decoration: underline;
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
