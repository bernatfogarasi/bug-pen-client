import styled from "styled-components";
import ProfilePictureRaw from "components/ProfilePicture";
import { Link } from "react-router-dom";

const ProfilePicture = styled(ProfilePictureRaw)``;

const Profile = ({ className, ...props }) => {
  return (
    <Link className={className} to="/profiles/me" {...props}>
      <ProfilePicture />
    </Link>
  );
};

export default Profile;
