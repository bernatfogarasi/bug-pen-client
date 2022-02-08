import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import imageProfile from "assets/icons/profile.png";
import Link from "components/Link";

const Wrapper = styled.div`
  border-radius: 50%;
  height: 40px;
  aspect-ratio: 1;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
`;

const ProfilePicture = ({ className, src, ...props }) => {
  const { user } = useAuth0();
  return (
    <Wrapper
      className={className}
      src={src || imageProfile}
      {...props}
    ></Wrapper>
  );
};

export default ProfilePicture;
