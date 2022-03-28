import fileImage from "assets/icons/file.png";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: 40px;
  transform: scale(0.6);
  width: fit-content;
`;

const Image = styled.img`
  height: 40px;
`;

const Extension = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10%;
  margin-left: 15%;
  background: #fff;
  width: fit-content;
  font-family: MontserratSemibold;
`;

const FileIcon = ({ className, mime, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Image src={fileImage} />
      <Extension>
        {
          //   Object.entries(extensions).filter(([extension, mimes]) =>
          //     mimes.includes(mime)
          //   )[0][0]
          "png"
        }
      </Extension>
    </Wrapper>
  );
};

export default FileIcon;
