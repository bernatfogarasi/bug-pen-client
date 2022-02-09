import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 4px;
  box-sizing: border-box;
  cursor: pointer;
  background: #eee;
  color: black;
  width: fit-content;
`;

const InputFile = ({
  className,
  options = { accept: "*", multiple: true },
  selectFile,
  ...props
}) => {
  const onClick = () => {
    selectFile(options, ({ source, name, size, file }) =>
      console.log({ source, name, size, file })
    );
  };
  return (
    <Wrapper className={className} onClick={onClick} {...props}>
      Upload
    </Wrapper>
  );
};

export default InputFile;
