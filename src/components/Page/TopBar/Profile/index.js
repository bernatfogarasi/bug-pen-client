import { useAuth0 } from "@auth0/auth0-react";
import Link from "components/Link";
import ProfilePicture from "components/ProfilePicture";
import useApp from "hooks/useApp";
import styled from "styled-components";

const Wrapper = styled(Link)``;

const Image = styled(ProfilePicture)``;

const Profile = ({ className, ...props }) => {
  const { user, isAuthenticated, loginWithPopup } = useAuth0();

  const { me } = useApp();

  const onClick = () => {
    if (!isAuthenticated) loginWithPopup({ prompt: "select_account" });
  };

  return (
    <Wrapper
      className={className}
      to={isAuthenticated ? `/profiles/${me?.userId}` : "#"}
      onClick={onClick}
      {...props}
    >
      <Image src={user?.picture} />
    </Wrapper>
  );
};

export default Profile;
