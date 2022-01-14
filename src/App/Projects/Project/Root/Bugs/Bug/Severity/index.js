import TableCell from "components/TableCell";
import styled from "styled-components";

const Wrapper = styled(TableCell)``;

const Severity = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      Severity
    </Wrapper>
  );
};

export default Severity;
