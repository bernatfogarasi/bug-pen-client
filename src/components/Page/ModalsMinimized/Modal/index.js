import styled from "styled-components";

const Wrapper = styled.div`
  width: 150px;
  height: 30px;
  background: yellow;
  border: 1px solid;
`;

const Modal = ({ className, modal, index, ...props }) => {
  //   const { openModal } = useModals();

  const onClick = () => {
    // openModal(index);
  };

  return (
    <Wrapper className={className} {...props} onClick={onClick}>
      {modal.type}
    </Wrapper>
  );
};

export default Modal;
