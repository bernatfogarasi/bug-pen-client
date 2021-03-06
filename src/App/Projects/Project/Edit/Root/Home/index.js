import Field_ from "components/Field";
import Form from "components/Form";
import InputColor from "components/InputColor";
import InputText_ from "components/InputText";
import InputTextArea_ from "components/InputTextArea";
import Page from "components/Page";
import Section from "components/Section";
import Tag from "components/Tag";
import useApp from "hooks/useApp";
import { useState } from "react";
import styled from "styled-components";

import Tags from "./Tags";

const Wrapper = styled(Page)`
  padding: 10px;
`;

const Edit = styled(Section)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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

const Home = ({ className, projectId, ...props }) => {
  const { project } = useApp();

  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [newTagTitle, setNewTagTitle] = useState("New tag");
  const [newTagTextColor, setNewTagTextColor] = useState("#000000");
  const [newTagBackgroundColor, setNewTagBackgroundColor] = useState("#eeeeee");
  const [newTagBorderColor, setNewTagBorderColor] = useState("#cccccc");

  const changed = (itemCheck, itemInitial) =>
    itemCheck === itemInitial || itemCheck === "" ? undefined : itemCheck;

  const changes = {
    title: changed(title, project.title),
    description: changed(description, project.description),
  };

  const set = (handler) => (event) => handler(event.target.value);

  return (
    <Wrapper className={className} {...props}>
      <Edit title="Edit project">
        <Form
          submitText={"Save"}
          directory={`/project-edit?projectId=${projectId}`}
          body={{ ...changes }}
        >
          <Field label="Title">
            <InputText value={title} onChange={set(setTitle)} />
          </Field>
          <Field label="Description">
            <InputTextArea value={description} onChange={set(setDescription)} />
          </Field>
        </Form>
      </Edit>
      <AddTag title="Add a tag">
        <Form
          submitText={"Add"}
          directory={`/tag-create?projectId=${projectId}`}
          body={{
            title: newTagTitle,
            textColor: newTagTextColor,
            backgroundColor: newTagBackgroundColor,
            borderColor: newTagBorderColor,
          }}
        >
          <Field label="Appearance">
            <Tag
              title={newTagTitle}
              textColor={newTagTextColor}
              backgroundColor={newTagBackgroundColor}
              borderColor={newTagBorderColor}
            />
          </Field>
          <Field label="Name">
            <InputText value={newTagTitle} onChange={set(setNewTagTitle)} />
          </Field>
          <Field label="Text color">
            <InputColor
              value={newTagTextColor}
              onChange={set(setNewTagTextColor)}
            />
          </Field>
          <Field label="Background color">
            <InputColor
              value={newTagBackgroundColor}
              onChange={set(setNewTagBackgroundColor)}
            />
          </Field>
          <Field label="Border color">
            <InputColor
              value={newTagBorderColor}
              onChange={set(setNewTagBorderColor)}
            />
          </Field>
        </Form>
        <Tags />
      </AddTag>
    </Wrapper>
  );
};

export default Home;
