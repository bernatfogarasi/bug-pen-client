import { useEffect, useRef } from "react";
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
  focus,
  ...props
}) => {
  const onChangeIntercept = (event) => {
    setValue(event.target.value);
    onChange(event);
  };

  const ref = useRef();

  useEffect(() => {
    if (focus) ref?.current?.focus();
  }, [ref]);

  return (
    <Wrapper
      className={className}
      value={value}
      onChange={onChangeIntercept}
      ref={ref}
      {...props}
    ></Wrapper>
  );
};

export default Input;
