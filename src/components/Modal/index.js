import useClickAway from "hooks/useClickAway";
import styled from "styled-components";
import closeImage from "assets/icons/close.png";

const Wrapper = styled.div`
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  height: 200px;
  width: 200px;
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  cursor: default;
`;

const Close = styled.img`
  height: 20px;
  display: block;
  margin-left: auto;
  border: 1px solid;
  cursor: pointer;
`;

const Modal = ({ className, children, open, setOpen, ...props }) => {
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
    <Wrapper className={className} ref={ref} {...props} onClick={onClick}>
      <Close src={closeImage} onClick={onClickClose} />
      {children}
    </Wrapper>
  ) : null;
};

export default Modal;
