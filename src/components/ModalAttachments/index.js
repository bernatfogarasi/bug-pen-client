import Modal from "components/Modal";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(Modal)``;

const ModalAttachments = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      asdf
    </Wrapper>
  );
};

export default ModalAttachments;
