import styled from "styled-components";
import Input from "./Input";
import Label from "./Label";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
`;

const FormField = ({
  className,
  label,
  required,
  value,
  setValue,
  ...props
}) => {
  return (
    <Wrapper className={className}>
      <Label required={required}>{label}</Label>
      <Input required={required} value={value} setValue={setValue} {...props} />
    </Wrapper>
  );
};

export default FormField;
