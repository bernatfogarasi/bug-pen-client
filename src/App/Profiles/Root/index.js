import styled from "styled-components";

const Wrapper = styled.div``;

const Profiles = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      Profiles
    </Wrapper>
  );
};

export default Profiles;
