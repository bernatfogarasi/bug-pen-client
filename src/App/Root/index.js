import Page from "components/Page";
import styled from "styled-components";

import Illustration from "./Illustration";
import Members from "./Members";
import Updates from "./Updates";
import Welcome from "./Welcome";

const Wrapper = styled(Page)`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
  grid-auto-rows: min-content;
  gap: 50px 20px;
  align-items: center;
  padding: 20px;
`;

const Root = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Members />
      <Welcome />
      <Illustration />
      <Updates />
    </Wrapper>
  );
};

export default Root;
