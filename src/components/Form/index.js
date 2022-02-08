import LoaderDots from "components/LoaderDots";
import useRequest from "hooks/useRequest";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Submit from "./Submit";

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

const Form = ({ className, children, body, directory, onSubmit, ...props }) => {
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
      {loading ? <Loader /> : <Submit />}
    </Wrapper>
  );
};

export default Form;
