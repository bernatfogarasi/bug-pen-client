import useApp from "hooks/useApp";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 20px;
  border-radius: 4px;
  background: #eee;
`;

const Hint = ({ className, ...props }) => {
  const { hint } = useApp();

  return (
    <Wrapper className={className} {...props}>
      {hint.message}
    </Wrapper>
  );
};

export default Hint;
