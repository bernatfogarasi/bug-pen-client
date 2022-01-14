import TableCell from "components/TableCell";
import styled from "styled-components";

const Wrapper = styled(TableCell)``;

const Priority = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      Priority
    </Wrapper>
  );
};

export default Priority;
