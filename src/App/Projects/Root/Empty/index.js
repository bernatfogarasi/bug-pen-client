import { useAuth0 } from "@auth0/auth0-react";
import image from "assets/illustrations/blank_canvas.svg";
import Page from "components/Page";
import styled from "styled-components";

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
  const { isAuthenticated } = useAuth0();

  return (
    <Wrapper className={className} createProject {...props}>
      <EmptyText>
        {isAuthenticated
          ? "You do not have any projects yet."
          : "Please log in to create a project."}
      </EmptyText>
      <EmptyImage src={image} />
    </Wrapper>
  );
};

export default Empty;
