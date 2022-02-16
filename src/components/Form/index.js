import { useEffect, useState } from "react";

import LoaderDots from "components/LoaderDots";
import Submit from "./Submit";
import styled from "styled-components";
import useRequest from "hooks/useRequest";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Content = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
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
  body,
  directory,
  onSubmit,
  submitText,
  disabled,
  ...props
}) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { post } = useRequest();

  const onSubmitIntercept = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { text } = await post(directory, body, () => setLoading(false));
    setError(text || undefined);
    onSubmit(event);
  };

  return (
    <Wrapper onSubmit={onSubmitIntercept} {...props}>
      <Content className={className}>{children}</Content>
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
