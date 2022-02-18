import Link from "components/Link";
import styled from "styled-components";

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled(Link)`
  text-decoration: underline;
  color: #00bfa6;
`;

const Authorization = styled.div``;

const Member = ({ className, member, index, ...props }) => {
  return (
    <Wrapper className={className} to="/" {...props}>
      <Name to={`/profiles/${member.id}`}>{member.name}</Name>
      <Authorization>{member.authorization}</Authorization>
    </Wrapper>
  );
};

export default Member;
