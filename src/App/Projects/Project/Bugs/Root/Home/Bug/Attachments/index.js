import styled from "styled-components";

import { useState } from "react";

const Wrapper = styled.div`
  cursor: pointer;
`;

const Attachments = ({ className, attachments = [1, 2, 3], ...props }) => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(true);
  };

  return attachments?.length ? (
    <Wrapper className={className} {...props} onClick={onClick}>
      Attachments
    </Wrapper>
  ) : (
    "-"
  );
};

export default Attachments;
