import useApp from "hooks/useApp";
import useHint from "hooks/useHint";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Text = styled.div``;

const Id = styled.div`
  font-weight: bold;
  display: inline-block;
`;

const Copy = styled.div`
  background: #00bfa6;
  color: white;
  padding: 10px;
  border-radius: 4px;
  transition: 0.1s;
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.9);
    background: #058d7b;
  }
  cursor: pointer;
`;

const UserId = ({ className, ...props }) => {
  const { profile } = useApp();
  const { setHint } = useHint();

  const onCopyClick = () => {
    navigator.clipboard.writeText(profile.userId);
    setHint("Id copied to clipboard");
  };

  return (
    <Wrapper className={className} {...props}>
      <Text>id:</Text>
      <Id>{profile.userId}</Id>
      <Copy onClick={onCopyClick}>Copy id</Copy>
    </Wrapper>
  );
};

export default UserId;
