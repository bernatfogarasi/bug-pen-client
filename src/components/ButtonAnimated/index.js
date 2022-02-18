import Button from "components/Button";
import styled from "styled-components";

const Wrapper = styled(Button)`
  padding: 10px;
  border: 2px solid #00bfa6;
  border-radius: 4px;
  color: #00bfa6;
  text-align: center;
  background: linear-gradient(to left, transparent 50%, #00bfa6 50%) right;
  background-size: 200%;
  transition: 0.3s;
  :hover {
    background-position: left;
    color: white;
  }
  cursor: pointer;
  box-sizing: border-box;
  white-space: nowrap;
`;

const ButtonAnimated = ({ className, children, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default ButtonAnimated;
