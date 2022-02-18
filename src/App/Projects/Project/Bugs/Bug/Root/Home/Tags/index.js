import Section from "components/Section";
import SectionGrid from "components/SectionGrid";
import Tag from "./Tag";
import styled from "styled-components";

const Wrapper = styled(SectionGrid)``;

const Tags = ({ className, bug, ...props }) => {
  return (
    <Wrapper className={className} title="tags" {...props}>
      {bug.tags
        .sort((tag1, tag2) => (tag1.title > tag2.title ? 1 : -1))
        .map((tag, index) => (
          <Tag key={tag.id} tag={tag} index={index} bug={bug} />
        ))}
    </Wrapper>
  );
};

export default Tags;
