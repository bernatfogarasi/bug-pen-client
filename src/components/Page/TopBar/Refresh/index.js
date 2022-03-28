import image from "assets/icons/refresh.png";
import useApp from "hooks/useApp";
import useHint from "hooks/useHint";
import styled from "styled-components";

const Wrapper = styled.img`
  padding: 10px;
  height: 20px;
  border-radius: 50%;
  background: #eee;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.95) rotate(-90deg);
  }
`;

const Refresh = ({ className, onClick = () => {}, ...props }) => {
  const { setRefresh } = useApp();

  const { setHint } = useHint();

  const increment = () => {
    setRefresh((count) => count + 1);
    setHint("Refreshing...");
  };

  const onClickIntercept = (event) => {
    increment();
    onClick(event);
  };

  return (
    <Wrapper
      className={className}
      onClick={onClickIntercept}
      src={image}
      {...props}
    ></Wrapper>
  );
};

export default Refresh;
