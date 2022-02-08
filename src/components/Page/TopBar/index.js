import styled from "styled-components";
import Breadcrumbs from "./Breadcrumbs";
import Profile from "./Profile";
import Refresh from "./Refresh";
import CreateProjectRaw from "components/CreateProject";
import ReportBug from "components/ReportBug";
import Login from "components/Login";
import { useAuth0 } from "@auth0/auth0-react";
import AddMember from "./AddMember";

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

const TopBar = ({
  className,
  createProject,
  reportBug,
  me,
  add,
  login = true,
  refresh = true,
  profile = true,
  breadcrumbs = true,
  ...props
}) => {
  const { isAuthenticated } = useAuth0();
  return (
    <Wrapper className={className} {...props}>
      {breadcrumbs && <Breadcrumbs />}
      {isAuthenticated ? (
        <>
          {createProject && <CreateProject />}
          {reportBug && <ReportBug />}
          {add && <AddMember />}
          {refresh && <Refresh />}
        </>
      ) : (
        login && <Login />
      )}
      {profile && <Profile />}
    </Wrapper>
  );
};

export default TopBar;
