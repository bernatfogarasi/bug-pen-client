import styled from "styled-components";

const Wrapper = styled.img`
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid;
`;

const Assignee = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Assignee;
