import styled from "styled-components";

const Wrapper = styled.pre`
  border: 1px solid black;
  background: #eee;
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  padding: 10px;
`;

const Json = ({ className, json, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {JSON.stringify(json, null, 4)}
    </Wrapper>
  );
};

export default Json;
