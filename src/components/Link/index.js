import { Link as LinkRaw } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(LinkRaw)`
  color: inherit;
  text-decoration: none;
`;

const Link = ({ className, ...props }) => {
  return <Wrapper className={className} {...props} />;
};

export default Link;
