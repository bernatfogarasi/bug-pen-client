import LoaderDots from "components/LoaderDots";
import styled, { css } from "styled-components";

const Wrapper = styled.button`
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 14px;
  /* border: 1px solid #454b69; */
  background: #454b69;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
    /* background: #ccc; */
  }
  :active {
    transform: scale(0.95);
  }
  transition: 0.1s;
  ${({ loading }) =>
    loading
      ? css`
          background: none;
        `
      : css``}
`;

const ButtonSmall = ({
  className,
  children = "Submit",
  loading,
  disabled,
  ...props
}) => {
  return (
    <Wrapper
      className={className}
      loading={loading}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? <LoaderDots /> : children}
    </Wrapper>
  );
};

export default ButtonSmall;
