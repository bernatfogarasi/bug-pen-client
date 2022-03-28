import LoaderDots from "components/LoaderDots";
import Page from "components/Page";
import useApp from "hooks/useApp";
import useRequest from "hooks/useRequest";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Profiles from "./Profiles";

const Wrapper = styled(Page)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Label = styled.label``;

const Input = styled.input`
  padding: 5px;
  border: 2px solid #454b69;
  border-radius: 4px;
  font-size: 18px;
  :focus {
    outline: none;
    border-color: #00bfa6;
  }
`;

const Loader = styled(LoaderDots)`
  margin: auto;
`;

const Home = ({ className, ...props }) => {
  const { get } = useRequest();
  const [text, setText] = useState("");
  const [textSearched, setTextSearched] = useState("");
  const { setProfiles } = useApp();
  const [loading, setLoading] = useState();

  const onSearch = () => {
    console.log(text);
    setProfiles([]);
    setTextSearched(text);
    setLoading(true);
    get(`/profiles-search?text=${encodeURIComponent(text)}`, () =>
      setLoading(false)
    );
  };

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!text) return;
    onSearch();
  };

  const inputRef = useRef();

  useEffect(() => {
    inputRef?.current?.focus();
  }, [inputRef]);

  return (
    <Wrapper className={className} me {...props}>
      <Form onSubmit={onSubmit}>
        <Label>Search for users</Label>
        <Input ref={inputRef} value={text} onChange={onTextChange} />
      </Form>
      {loading ? <Loader /> : <Profiles textSearched={textSearched} />}
    </Wrapper>
  );
};

export default Home;
