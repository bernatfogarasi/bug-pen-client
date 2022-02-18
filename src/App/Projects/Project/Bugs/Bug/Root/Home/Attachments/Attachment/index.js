import ButtonSmall from "components/ButtonSmall";
import { fileSize } from "functions/text";
import styled from "styled-components";
import useApp from "hooks/useApp";
import useRequest from "hooks/useRequest";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

const Remove = styled(ButtonSmall)``;

const Title = styled.div``;

const Size = styled.div`
  margin-left: auto;
`;

const Download = styled(ButtonSmall)``;

const Attachment = ({ className, attachment, index, bug, ...props }) => {
  const { get, post } = useRequest();

  const { project } = useApp();

  const [loading, setLoading] = useState(false);

  const onRemove = () => {
    setLoading(true);
    post(
      `/attachment-remove?projectId=${project.projectId}&bugId=${bug.id}&attachmentId=${attachment.id}`,
      () => setLoading(false)
    );
  };

  const onDownload = async () => {
    const response = await get(
      `/attachment-get?projectId=${project.projectId}&bugId=${bug.id}&attachmentId=${attachment.id}`,
      () => setLoading(false)
    );
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = attachment.title;
    link.click();
  };

  return (
    <Wrapper className={className} {...props}>
      <Title>{attachment.title}</Title>
      <Size>{fileSize(attachment.size)}</Size>
      <Download onClick={onDownload}>Download</Download>
      <Remove loading={loading} onClick={onRemove}>
        Remove
      </Remove>
    </Wrapper>
  );
};

export default Attachment;
