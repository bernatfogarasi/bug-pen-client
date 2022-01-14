import Form from "components/Form";
import Modal from "components/Modal";
import styled from "styled-components";

const Wrapper = styled(Modal)``;

const ModalForm = ({ className, children, body, directory, ...props }) => {
  return (
    <Wrapper {...props}>
      <Form className={className} body={body} directory={directory}>
        {children}
      </Form>
    </Wrapper>
  );
};

export default ModalForm;
