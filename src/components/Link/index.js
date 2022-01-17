import styled from "styled-components";
import { Link as LinkRaw } from "react-router-dom";
const Wrapper = styled(LinkRaw)`
  color: inherit;
  text-decoration: none;
`;

const Link = ({ className, ...props }) => {
  return <Wrapper className={className} {...props} />;
};

export default Link;
