import Option from "components/Option";
import Select from "components/Select";
import styled from "styled-components";

const Wrapper = styled(Select)`
  background: #00bfa6;
  border: 1px solid #ccc;
  font-size: 18px;
  font-family: inherit;
  padding: 4px;
  border-radius: 0;
  :focus {
    outline: 0;
  }
`;

const InputSelect = ({
  className,
  options = [
    { value: 5, content: "Very high" },
    { value: 4, content: "High" },
    { value: 3, content: "Medium" },
    { value: 2, content: "Low" },
    { value: 1, content: "Very low" },
  ],
  ...props
}) => {
  return (
    <Wrapper className={className} {...props}>
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.content}
        </Option>
      ))}
    </Wrapper>
  );
};
export default InputSelect;