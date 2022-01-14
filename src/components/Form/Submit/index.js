import ButtonAnimated from "components/ButtonAnimated";
import styled from "styled-components";

const Wrapper = styled.button`
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 14px;
  /* border: 1px solid #454b69; */
  background: #454b69;
  margin-left: auto;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
    /* background: #ccc; */
  }
  :active {
    transform: scale(0.95);
  }
  transition: 0.1s;
`;

const Submit = ({ className, ...props }) => {
  return (
    <Wrapper className={className} type="submit" {...props}>
      Submit
    </Wrapper>
  );
};

export default Submit;
