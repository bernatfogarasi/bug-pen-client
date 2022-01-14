import styled from "styled-components";
import image from "assets/illustrations/blank_canvas.svg";
import Page from "components/Page";

const Wrapper = styled(Page)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;

const EmptyText = styled.div`
  text-align: center;
  opacity: 0.8;
`;

const EmptyImage = styled.img`
  width: 60%;
  max-height: 60%;
`;

const Empty = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <EmptyText>You do not have any projects yet.</EmptyText>
      <EmptyImage src={image} />
    </Wrapper>
  );
};

export default Empty;
