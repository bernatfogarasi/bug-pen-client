import TableCell from "components/TableCell";
import styled from "styled-components";

const Wrapper = styled(TableCell)``;

const Title = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Title;
