import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
`;

const Attachments = ({ className, attachments = [1, 2, 3], ...props }) => {
  return attachments?.length ? (
    <Wrapper className={className} {...props}>
      Attachments
    </Wrapper>
  ) : (
    "-"
  );
};

export default Attachments;
