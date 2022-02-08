import Link from "components/Link";
import styled from "styled-components";

const Wrapper = styled(Link)`
  color: #00bfa6;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.div``;

const Authorization = styled.div``;

const Member = ({ className, member, index, ...props }) => {
  return (
    <Wrapper className={className} to="/" {...props}>
      <Name>{member.name}</Name>
      <Authorization>{member.authorization}</Authorization>
    </Wrapper>
  );
};

export default Member;
