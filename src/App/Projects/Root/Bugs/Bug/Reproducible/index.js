import TableCell from "components/TableCell";
import styled from "styled-components";

const Wrapper = styled(TableCell)``;

const Reproducible = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      Reproducible
    </Wrapper>
  );
};

export default Reproducible;
