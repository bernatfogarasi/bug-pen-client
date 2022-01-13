import styled from "styled-components";
import Breadcrumbs from "./Breadcrumbs";
import Profile from "./Profile";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 10px;
`;

const TopBar = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Breadcrumbs />
      <Profile />
    </Wrapper>
  );
};

export default TopBar;
