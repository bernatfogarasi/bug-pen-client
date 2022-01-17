import styled from "styled-components";

const Wrapper = styled.input`
  border: 1px solid #454b69;
  padding: 4px;
  font-size: 14px;
  border-radius: 4px;
`;

const Input = ({
  className,
  value,
  setValue = () => {},
  onChange = () => {},
  ...props
}) => {
  const onChangeIntercept = (event) => {
    setValue(event.target.value);
    onChange(event);
  };

  return (
    <Wrapper
      className={className}
      value={value}
      onChange={onChangeIntercept}
      {...props}
    ></Wrapper>
  );
};

export default Input;
