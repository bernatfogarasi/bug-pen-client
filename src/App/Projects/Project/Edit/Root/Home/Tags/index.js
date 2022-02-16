import Section from "components/Section";
import Separator from "components/Separator";
import Tag from "./Tag";
import styled from "styled-components";
import useApp from "hooks/useApp";

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
          <>
            {index === 0 ? <Separator /> : null}
            <Tag key={tag.id} tag={tag} index={index} />
            <Separator />
          </>
        ))}
    </Wrapper>
  );
};

export default Tags;
