import Section from "components/Section";
import Separator from "components/Separator";
import Tag from "./Tag";
import styled from "styled-components";

const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const Tags = ({ className, bug, ...props }) => {
  return (
    <Wrapper className={className} title="tags" {...props}>
      {bug.tags
        .sort((tag1, tag2) => (tag1.title > tag2.title ? 1 : -11))
        .map((tag, index) => (
          <Tag key={tag.id} tag={tag} index={index} bug={bug} />
        ))}
    </Wrapper>
  );
};

export default Tags;
