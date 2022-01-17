import Link from "components/Link";
import styled from "styled-components";

const Wrapper = styled(Link)`
  color: #00bfa6;
`;

const Member = ({ className, member, index, ...props }) => {
  return (
    <Wrapper className={className} to="/" {...props}>
      {member.name}
    </Wrapper>
  );
};

export default Member;
