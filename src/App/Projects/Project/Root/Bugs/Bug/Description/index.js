import TableCell from "components/TableCell";
import styled from "styled-components";

const Wrapper = styled(TableCell)`
  max-width: 300px;
  font-size: 14px;
  opacity: 0.7;
`;

const Description = ({ className, children, ...props }) => {
  return (
    <Wrapper className={className} title={children} {...props}>
      {children}
    </Wrapper>
  );
};

export default Description;
