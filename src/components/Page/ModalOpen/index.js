import ModalAttachments from "components/ModalAttachments";
import ModalCreateProject from "components/ModalCreateProject";
import ModalEditProject from "components/ModalEditProject";
import useApp from "hooks/useApp";
import styled from "styled-components";

const modalComponents = {
  createProject: ModalCreateProject,
  editProject: ModalEditProject,
  attachments: ModalAttachments,
};

const Wrapper = styled.div`
  position: absolute;
`;

const ModalOpen = ({ className, ...props }) => {
  const { modals } = useApp();
  return (
    <Wrapper className={className} {...props}>
      {JSON.stringify(modals.filter((modal) => modal.open)[0])}
      {modalComponents?.[modals.filter((modal) => modal.open)[0].type]}
    </Wrapper>
  );
};

export default ModalOpen;
