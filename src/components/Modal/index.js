import useClickAway from "hooks/useClickAway";
import styled from "styled-components";
import closeImage from "assets/icons/close.png";

const Overlay = styled.div`
  position: absolute;
  background: black;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  opacity: 0.2;
`;

const Window = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  cursor: default;
`;

const Head = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  background: #00bfa6;
  color: white;
`;

const Close = styled.img`
  height: 20px;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.div``;

const Modal = ({ className, children, title, open, setOpen, ...props }) => {
  const onClick = (event) => {
    event.stopPropagation();
  };

  const onClickAway = () => {
    setOpen(false);
  };

  const onClickClose = () => {
    setOpen(false);
  };

  const { ref } = useClickAway(onClickAway);

  return open ? (
    <>
      <Overlay />
      <Window ref={ref} onClick={onClick} {...props}>
        <Head>
          <Title>{title}</Title>
          <Close src={closeImage} onClick={onClickClose} />
        </Head>
        <Content className={className}>{children}</Content>
      </Window>
    </>
  ) : null;
};

export default Modal;
