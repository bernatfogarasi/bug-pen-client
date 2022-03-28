import styled from "styled-components";

const Wrapper = styled.select`
  border: 1px solid;
  padding: 10px;
  font-size: 18px;
  border-radius: 4px;
`;

const Select = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Select;
