import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 4px;
  box-sizing: border-box;
  cursor: pointer;
  color: black;
  width: fit-content;
  background: #fff;
`;

const InputFileOld = ({
  className,
  options = { accept: "*", multiple: true },
  selectFile = () => {},
  ...props
}) => {
  const onClick = () => {
    selectFile(options, async (data) => {
      const response = await fetch(data.source);
      // const blob = await response.blob();
      // console.log(blob);
      // const file = new File([blob.data], "test");
      const file = await response.arrayBuffer();
      console.log(file);
      // console.log(file.data);
      // console.log(file);
    });
  };
  return (
    <Wrapper className={className} onClick={onClick} {...props}>
      Upload
    </Wrapper>
  );
};

export default InputFileOld;
