import styled from "styled-components";
import Breadcrumbs from "./Breadcrumbs";
import Profile from "./Profile";
import Refresh from "./Refresh";
import CreateProjectRaw from "components/CreateProject";
import ReportBug from "components/ReportBug";

const Wrapper = styled.div`
  grid-row: 1;
  grid-column: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 20px;
  overflow: hidden;
`;

const CreateProject = styled(CreateProjectRaw)`
  margin-left: auto;
  flex-shrink: 0;
`;

const TopBar = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Breadcrumbs />
      <CreateProject />
      <ReportBug />
      <Refresh />
      <Profile />
    </Wrapper>
  );
};

export default TopBar;
