import styled from "styled-components";

const Wrapper = styled.input`
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  color: inherit;
`;

const InputFile = ({ className, setFile, ...props }) => {
  const onChange = (event) => {
    const file = event.target.files;
    console.log(file);
    setFile(file);
  };
  return (
    <Wrapper
      className={className}
      type="file"
      multiple
      onChange={onChange}
      {...props}
    />
  );
};

export default InputFile;
