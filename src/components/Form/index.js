import useApp from "hooks/useApp";
import useRequest from "hooks/useRequest";
import { useState } from "react";
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

const Form = ({ className, children, body, directory, onSubmit, ...props }) => {
  const [error, setError] = useState();

  const { post } = useRequest();

  const onSubmitIntercept = async (event) => {
    event.preventDefault();
    const { json, text } = await post(directory, body);
    setError(text || undefined);
    onSubmit(event);
  };

  return (
    <Wrapper {...props} onSubmit={onSubmitIntercept}>
      <Content className={className}>{children}</Content>
      {error && <Error>Error: {error}</Error>}
      <Submit />
    </Wrapper>
  );
};

export default Form;
