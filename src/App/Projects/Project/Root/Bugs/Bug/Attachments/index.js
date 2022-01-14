import styled from "styled-components";
import TableCell from "components/TableCell";
import ModalAttachments from "components/ModalAttachments";
import { useState } from "react";

const Wrapper = styled(TableCell)`
  cursor: pointer;
`;

const Attachments = ({ className, attachments = [1, 2, 3], ...props }) => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(true);
  };

  return attachments?.length ? (
    <Wrapper className={className} {...props} onClick={onClick}>
      <ModalAttachments open={open} setOpen={setOpen} />
      {attachments.length}
    </Wrapper>
  ) : (
    "-"
  );
};

export default Attachments;
