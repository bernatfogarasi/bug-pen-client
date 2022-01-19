import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2px 10px;
  white-space: nowrap;
  border-radius: 10px;
  font-size: 10px;
  text-align: center;
  border: 1px solid #ccc;
  background: #eee;
  color: black;
`;

const BugTag = ({ className, tag, ...props }) => {
  return (
    <Wrapper className={className} style={tag.style} tag={tag} {...props}>
      {tag.text}
    </Wrapper>
  );
};

export default BugTag;
