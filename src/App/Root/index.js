import Page from "components/Page";
import styled from "styled-components";
import Illustration from "./Illustration";
import Members from "./Members";
import Updates from "./Updates";
import Welcome from "./Welcome";

const Wrapper = styled(Page)`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

const Root = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Welcome />
      <Illustration />
      <Members />
      <Updates />
    </Wrapper>
  );
};

export default Root;
