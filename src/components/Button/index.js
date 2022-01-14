import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
  cursor: pointer;
  user-select: none;
  transition: 0.1s;
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.95);
  }
`;

const Button = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Button;
