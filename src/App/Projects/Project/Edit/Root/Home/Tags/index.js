import Section from "components/Section";
import useApp from "hooks/useApp";
import styled from "styled-components";

import Tag from "./Tag";

const Wrapper = styled(Section)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Tags = ({ className, ...props }) => {
  const { project } = useApp();

  return (
    <Wrapper className={className} title="tags" {...props}>
      {project.tags
        .sort((tag1, tag2) => (tag1.title > tag2.title ? 1 : -11))
        .map((tag, index) => (
          <Tag key={tag.id} tag={tag} index={index} />
        ))}
    </Wrapper>
  );
};

export default Tags;
