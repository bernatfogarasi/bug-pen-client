import LoaderDots from "components/LoaderDots";
import Page from "components/Page";
import styled from "styled-components";

const Wrapper = styled(Page)``;

const LoadingPage = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <LoaderDots />
    </Wrapper>
  );
};

export default LoadingPage;
