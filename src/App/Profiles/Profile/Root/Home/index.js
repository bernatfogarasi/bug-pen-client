import ProfilePicture from "components/ProfilePicture";
import useApp from "hooks/useApp";
import styled from "styled-components";
import UserId from "./UserId";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Image = styled(ProfilePicture)`
  margin: auto;
  height: 100px;
`;

const Name = styled.div`
  margin: auto;
  font-size: 20px;
`;

const Home = ({ className, ...props }) => {
  const { profile } = useApp();

  return (
    <Wrapper className={className} {...props}>
      <Image src={profile.picture} />
      <Name>{profile.name}</Name>
      <UserId />
    </Wrapper>
  );
};

export default Home;
