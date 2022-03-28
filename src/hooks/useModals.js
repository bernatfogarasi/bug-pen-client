import useApp from "./useApp";

// const modals = {
//   open: { type: "" },
//   minimized: [
//     { type: "" },
//     { type: "" },
//     { type: "" },
//     { type: "" },
//     { type: "" },
//   ],
// };

const useModals = () => {
  // const { modalOpen, modalsMinimized, setModalOpen, setModalsMinimized } =
  //   useApp();

  // const openModal = (index, modalOpen, modalsMinimized) => {
  //   modalOpenNew = modalsMinimized.splice(index, 1);
  //   if (modalOpen) modalsMinimized.splice(0, 0, modalOpen);
  //   return modalOpen, modalsMinimized;
  // };

  // const createModal = (type, modalOpen, modalsMinimized) => {
  //   if (modalOpen) setModalsMinimized([modalOpen, ...modalsMinimized]);
  //   const modal = {
  //     type,
  //     id: Date.now(),
  //     open: true,
  //     data: {},
  //   };
  //   setModalOpen(modal);
  // };

  // useEffect(() => {
  //   console.log("open", modalOpen);
  // }, [modalOpen]);

  // useEffect(() => {
  //   console.log("minimized", modalsMinimized);
  // }, [modalsMinimized]);

  // const closeModal = () => {
  //   setModalOpen(undefined);
  // };

  // const openModal = (index) => {
  //   var modalsMinimizedCopy = modalsMinimized;
  //   const modal = modalsMinimizedCopy.splice(index, 1);
  //   if (modalOpen) modalsMinimizedCopy.splice(0, 0, modalOpen);
  //   setModalsMinimized(modalsMinimizedCopy);
  //   setModalOpen(modal);
  // };

  // return { createModal, openModal, closeModal };

  const { setModals } = useApp();

  const create = (modals, type) => {
    modals = modals.map((modal) => ({ ...modal, open: false }));
    modals.splice(0, 0, {
      id: Date.now(),
      type,
      open: true,
      data: {},
    });
    return modals;
  };

  const open = (modals, index) => {};

  const close = (modals) => {
    modals = modals.filter((modal) => !modal.open);
    return modals;
  };

  const execute =
    (handler) =>
    (...params) =>
      setModals((modals) => handler(modals, ...params));

  return {
    createModal: execute(create),
    openModal: execute(open),
    closeModal: execute(close),
  };
};

export default useModals;
