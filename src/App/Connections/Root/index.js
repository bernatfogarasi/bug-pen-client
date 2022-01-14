import Page from "components/Page";
import styled from "styled-components";

const Wrapper = styled(Page)``;

const Connections = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Connections;
