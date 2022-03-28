import Link from "components/Link";
import ProfilePicture from "components/ProfilePicture";
import styled from "styled-components";

import Actions from "./Actions";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto 1fr;
  gap: 20px;
  border: 1px solid;
  padding: 10px;
  align-items: center;
  border-radius: 4px;
`;

const Image = styled(ProfilePicture)``;

const Name = styled(Link)`
  text-decoration: underline;
  font-weight: bold;
`;

const Authorization = styled.div``;

const UserId = styled.div``;

const Member = ({ className, member, index, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Image src={member.picture}></Image>
      <Name to={`/profiles/${member.userId}`}>{member.name}</Name>
      <Authorization>{member.authorization}</Authorization>
      <UserId>{member.userId}</UserId>
      <Actions member={member} />
    </Wrapper>
  );
};

export default Member;
