import Form from "components/Form";
import Modal from "components/Modal";
import styled from "styled-components";

const Wrapper = styled(Modal)``;

const ModalForm = ({
  className,
  children,
  body,
  directory,
  setOpen,
  ...props
}) => {
  const onSubmit = () => {
    console.log("submit");
    setOpen(false);
  };
  return (
    <Wrapper setOpen={setOpen} {...props}>
      <Form
        className={className}
        body={body}
        directory={directory}
        onSubmit={onSubmit}
      >
        {children}
      </Form>
    </Wrapper>
  );
};

export default ModalForm;
