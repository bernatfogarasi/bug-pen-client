import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 4px;
  text-align: center;
  padding: 2px 10px;
  min-width: 80px;
  border-radius: 100px;
  font-size: 14px;
  border: 2px solid transparent;
  box-sizing: border-box;
`;

const BugTag = ({ className, tag, ...props }) => {
  return (
    <Wrapper className={className} style={tag.style} tag={tag} {...props}>
      {tag.text}
    </Wrapper>
  );
};

export default BugTag;
