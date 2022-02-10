import Button_ from "components/Button";
import Field_ from "components/Field";
import Form from "components/Form";
import InputColor from "components/InputColor";
import InputTextArea_ from "components/InputTextArea";
import InputText_ from "components/InputText";
import Page from "components/Page";
import Section from "components/Section";
import Separator from "components/Separator";
import Tag from "components/Tag";
import Tags from "./Tags";
import styled from "styled-components";
import useApp from "hooks/useApp";
import { useState } from "react";

const Wrapper = styled(Page)`
  padding: 10px;
`;

const AddTag = styled(Section)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Field = styled(Field_)`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

const InputText = styled(InputText_)`
  width: 50%;
  max-width: 400px;
`;

const InputTextArea = styled(InputTextArea_)`
  width: 50%;
  max-width: 400px;
`;

const Button = styled(Button_)`
  border: 1px solid #ccc;
  width: fit-content;
  padding: 5px;
  :active {
    background: #eee;
  }
  margin-top: 20px;
  margin-left: auto;
`;

const Home = ({ className, projectId, ...props }) => {
  const { project } = useApp();

  const [newTagTitle, setNewTagTitle] = useState("New tag");
  const [newTagTextColor, setNewTagTextColor] = useState("#000000");
  const [newTagBackgroundColor, setNewTagBackgroundColor] = useState("#eeeeee");
  const [newTagBorderColor, setNewTagBorderColor] = useState("#cccccc");

  const set = (handler) => (event) => handler(event.target.value);

  return (
    <Wrapper className={className} {...props}>
      <AddTag title="Add a tag">
        <Form
          directory={`/tag-create?projectId=${projectId}`}
          body={{
            title: newTagTitle,
            textColor: newTagTextColor,
            backgroundColor: newTagBackgroundColor,
            borderColor: newTagBorderColor,
          }}
        >
          <Separator />
          <Field label="Appearance">
            <Tag
              title={newTagTitle}
              textColor={newTagTextColor}
              backgroundColor={newTagBackgroundColor}
              borderColor={newTagBorderColor}
            />
          </Field>
          <Separator />
          <Field label="Name">
            <InputText value={newTagTitle} onChange={set(setNewTagTitle)} />
          </Field>
          <Separator />
          <Field label="Text color">
            <InputColor
              value={newTagTextColor}
              onChange={set(setNewTagTextColor)}
            />
          </Field>
          <Separator />
          <Field label="Background color">
            <InputColor
              value={newTagBackgroundColor}
              onChange={set(setNewTagBackgroundColor)}
            />
          </Field>
          <Separator />
          <Field label="Border color">
            <InputColor
              value={newTagBorderColor}
              onChange={set(setNewTagBorderColor)}
            />
          </Field>
          <Separator />
        </Form>
        <Tags />
      </AddTag>
    </Wrapper>
  );
};

export default Home;
