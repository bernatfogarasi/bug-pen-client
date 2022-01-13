import styled from "styled-components";

const Wrapper = styled.div``;

const Profile = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      Profile
    </Wrapper>
  );
};

export default Profile;
