import useApp from "hooks/useApp";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  border: 1px solid;
  margin: 10px;
  border-radius: 4px;
`;

const Hint = ({ className, ...props }) => {
  const { hint } = useApp();

  const [message, type] = Object.isObject(hint) ? hint : [hint, undefined];

  return (
    <Wrapper className={className} {...props}>
      {message}
    </Wrapper>
  );
};

export default Hint;
