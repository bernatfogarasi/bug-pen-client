import Page from "components/Page";
import styled from "styled-components";
import imageProfile from "assets/illustrations/profile.svg";

const Wrapper = styled(Page)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Text = styled.div`
  width: 60%;
  text-align: center;
`;

const Image = styled.img`
  width: 60%;
  max-height: 60%;
  display: block;
`;

const NoAuthentication = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Text>
        Please log in to edit your profile and to search for other users.
      </Text>
      <Image src={imageProfile} />
    </Wrapper>
  );
};

export default NoAuthentication;
