import useApp from "hooks/useApp";
import styled from "styled-components";
import Modal from "./Modal";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  right: 0;
`;

const ModalsMinimized = ({ className, ...props }) => {
  const { modals } = useApp();

  return (
    <Wrapper className={className} {...props}>
      {modals
        .filter((modal) => !modal.open)
        .map((modal, index) => (
          <Modal key={modal.id} modal={modal} index={index} />
        ))}
    </Wrapper>
  );
};

export default ModalsMinimized;
