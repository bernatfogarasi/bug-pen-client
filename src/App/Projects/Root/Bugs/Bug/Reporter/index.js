import TableCell from "components/TableCell";
import styled from "styled-components";

const Wrapper = styled(TableCell)``;

const Reporter = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      Reporter
    </Wrapper>
  );
};

export default Reporter;
