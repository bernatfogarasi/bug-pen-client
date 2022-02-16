import Tag from "components/Tag";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

const Tags = ({ className, tags, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {tags.map((tag) => (
        <Tag key={tag.id} {...tag} />
      ))}
    </Wrapper>
  );
};

export default Tags;
