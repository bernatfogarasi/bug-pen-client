import ButtonAnimated from "components/ButtonAnimated";
import ModalForm from "components/ModalForm";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const ButtonDefault = styled(ButtonAnimated)``;

const ModalDefault = styled(ModalForm)``;

const ButtonModalForm = ({
  className,
  Button = ButtonDefault,
  Modal = ModalDefault,
  title,
  ...props
}) => {
  const [open, setOpen] = useState();
  const onClick = () => {
    setOpen(true);
  };
  return (
    <Wrapper className={className}>
      <Button onClick={onClick}>{title}</Button>
      <ModalForm title={title} open={open} setOpen={setOpen} {...props} />
    </Wrapper>
  );
};

export default ButtonModalForm;
