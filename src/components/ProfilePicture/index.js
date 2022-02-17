import imageProfile from "assets/icons/profile.png";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 50%;
  height: 40px;
  aspect-ratio: 1;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
`;

const ProfilePicture = ({ className, src, ...props }) => {
  return (
    <Wrapper
      className={className}
      src={src || imageProfile}
      {...props}
    ></Wrapper>
  );
};

export default ProfilePicture;
