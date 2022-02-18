import Attachment from "./Attachment";
import SectionGrid from "components/SectionGrid";
import styled from "styled-components";

const Wrapper = styled(SectionGrid)``;

const Attachments = ({ className, bug, ...props }) => {
  return (
    <Wrapper className={className} title="attachments" {...props}>
      {bug.attachments
        .sort((attachment1, attachment2) =>
          attachment1.title > attachment2.title ? 1 : -1
        )
        .map((attachment, index) => (
          <Attachment
            key={attachment.id}
            attachment={attachment}
            index={index}
            bug={bug}
          />
        ))}
    </Wrapper>
  );
};

export default Attachments;
