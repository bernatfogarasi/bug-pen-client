import Link from "components/Link";
import ProfilePicture from "components/ProfilePicture";
import styled from "styled-components";

const Wrapper = styled(Link)`
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 20px;
  border: 1px solid;
  border-radius: 4px;
  transition: 0.2s;
  :hover {
    background: #eee;
  }
`;

const Index = styled.div``;

const Name = styled.div``;

const Image = styled(ProfilePicture)``;

const MembershipsCount = styled.div`
  opacity: 0.6;
`;

const Profile = ({ className, textSearched, profile, index, ...props }) => {
  return (
    <Wrapper
      className={className}
      to={`${window.location.pathname}/${profile.userId}`}
      {...props}
    >
      <Index>{index + 1}.</Index>
      <Image src={profile.picture} />
      <Name>{profile.name}</Name>
      <MembershipsCount>Projects: {profile.membershipsCount}</MembershipsCount>
    </Wrapper>
  );
};

export default Profile;
