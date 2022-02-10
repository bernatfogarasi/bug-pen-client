import ButtonSmall from "components/ButtonSmall";
import Link from "components/Link";
import Tag__ from "components/Tag";
import styled from "styled-components";
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

const Tag = ({ className, tag, index, ...props }) => {
  const { post } = useRequest();

  const [loading, setLoading] = useState(false);

  const onRemove = () => {
    setLoading(true);
    const projectId = window.location.pathname.split("/")[2];
    post(`/tag-remove?projectId=${projectId}&tagId=${tag.id}`, () =>
      setLoading(false)
    );
  };

  return (
    <Wrapper className={className} {...props}>
      {index}
      <Tag_ {...tag} />
      <Text>Created by</Text>
      <Name to={`/profiles/${tag.creator.userId}`}>{tag.creator.name}</Name>
      <Text> at {tag.createdAt.substring(0, 16).replace("T", " ")}.</Text>
      <Remove loading={loading} onClick={onRemove}>
        Remove
      </Remove>
    </Wrapper>
  );
};

export default Tag;
