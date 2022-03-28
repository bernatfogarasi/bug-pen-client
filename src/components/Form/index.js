import LoaderDots from "components/LoaderDots";
import useRequest from "hooks/useRequest";
import { useState } from "react";
import styled, { css } from "styled-components";

import Submit from "./Submit";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Content = styled.div`
  /* display: flex;
  gap: 10px;
  flex-direction: column; */
  display: grid;
  ${({ columns }) =>
    columns
      ? css`
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        `
      : css``}
  max-width: 100%;
  overflow: hidden;
  padding: 1px;
  box-sizing: border-box;
  gap: 10px;
  & > * {
    outline: 1px solid #ccc;
    padding: 10px;
    background: #f8f8f8;
    border-radius: 4px;
  }
`;

const Error = styled.div`
  color: red;
  margin: auto;
  text-align: center;
  width: 200px;
`;

const Loader = styled(LoaderDots)`
  margin-left: auto;
`;

const Form = ({
  className,
  children,
  columns,
  body,
  directory,
  onSubmit,
  submitText,
  disabled,
  files,
  ...props
}) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { post, postFiles } = useRequest();

  const onSubmitIntercept = async (event) => {
    event.preventDefault();
    setLoading(true);
    const requestHandler = files ? postFiles : post;
    const { text } = await requestHandler(directory, body, () =>
      setLoading(false)
    );
    setError(text || undefined);
    onSubmit(event);
  };

  return (
    <Wrapper onSubmit={onSubmitIntercept} {...props}>
      <Content className={className} columns={columns}>
        {children}
      </Content>
      {error && <Error>Error: {error}</Error>}
      {loading ? (
        <Loader />
      ) : (
        <Submit disabled={disabled} submitText={submitText} />
      )}
    </Wrapper>
  );
};

export default Form;
