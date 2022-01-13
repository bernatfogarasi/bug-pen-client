import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 50%;
  height: 40px;
  aspect-ratio: 1;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
`;

const ProfilePicture = ({ className, ...props }) => {
  const { user } = useAuth0();
  return (
    <Wrapper className={className} src={user?.picture} {...props}></Wrapper>
  );
};

export default ProfilePicture;
