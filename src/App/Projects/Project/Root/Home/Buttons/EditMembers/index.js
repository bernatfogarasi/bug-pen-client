import ButtonModalForm from "components/ButtonModalForm";
import styled from "styled-components";

const Wrapper = styled(ButtonModalForm)``;

const EditMembers = ({ className, ...props }) => {
  return (
    <Wrapper className={className} title={"Edit members"} {...props}></Wrapper>
  );
};

export default EditMembers;
