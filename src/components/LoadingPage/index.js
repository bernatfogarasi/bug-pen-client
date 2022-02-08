import LoaderDots from "components/LoaderDots";
import Page from "components/Page";
import styled from "styled-components";

const Wrapper = styled(Page)`
  display: flex;
`;

const Loader = styled(LoaderDots)`
  margin: auto;
`;

const LoadingPage = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Loader />
    </Wrapper>
  );
};

export default LoadingPage;
