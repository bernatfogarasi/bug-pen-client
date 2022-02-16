import { useEffect, useState } from "react";

import Attributes from "components/Attributes";
import Field_ from "components/Field";
import Form from "components/Form";
import InputBoolean from "components/InputBoolean";
import InputFile_ from "components/InputFile";
import InputSelect from "components/InputSelect";
import InputTextArea_ from "components/InputTextArea";
import InputText_ from "components/InputText";
import Json from "components/Json";
import Page from "components/Page";
import Section_ from "components/Section";
import Tags from "./Tags";
import styled from "styled-components";
import useApp from "hooks/useApp";
import { useFileUpload } from "use-file-upload";

const Wrapper = styled(Page)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;

const Section = styled(Section_)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const Edit = styled(Section)``;

const Attachments = styled(Section)``;

const Assignees = styled(Section)``;

const AddTag = styled(Section)``;

const AddAssignee = styled(Section)``;

const Field = styled(Field_)`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: #ccc;
`;

const InputText = styled(InputText_)`
  width: 50%;
  max-width: 400px;
`;

const InputTextArea = styled(InputTextArea_)`
  width: 50%;
  max-width: 400px;
`;

const InputFile = styled(InputFile_)``;

const Home = ({ className, bug, projectId, ...props }) => {
  const { project } = useApp();

  const [title, setTitle] = useState(bug.title);
  const [description, setDescription] = useState(bug.description);
  const [reproducible, setReproducible] = useState(bug.reproducible);
  const [impact, setImpact] = useState(bug.impact);
  const [urgency, setUrgency] = useState(bug.urgency);
  const [assigneesAvailable, setAssigneesAvailable] = useState([]);
  const [assignee, setAssignee] = useState(bug.assignees?.[0]);
  const [attachment, selectAttachment] = useFileUpload();
  const [attachments, setAttachments] = useState(bug.attachments);
  const [tagsAvailable, setTagsAvailable] = useState([]);
  const [tag, setTag] = useState();

  useEffect(() => {
    const tagsAvailable = project.tags.filter(
      (tag) => !bug.tags.map((tag) => tag.id).includes(tag.id)
    );
    setTagsAvailable(tagsAvailable);

    const assigneesAvailable = project.members.filter(
      (member) =>
        !bug.assignees
          .map((assignee) => assignee.userId)
          .includes(member.userId)
    );
    setAssigneesAvailable(assigneesAvailable);
  }, [bug, tag, project]);

  useEffect(() => {
    setTag(tagsAvailable?.[0]);
  }, [tagsAvailable]);

  const changed = (itemCheck, itemInitial) =>
    itemCheck === itemInitial || itemCheck === "" ? undefined : itemCheck;

  const changes = {
    title: changed(title, bug.title),
    description: changed(description, bug.description),
    reproducible: changed(reproducible, bug.reproducible),
    impact: changed(impact, bug.impact),
    urgency: changed(urgency, bug.urgency),
  };

  const set = (handler) => (event) => handler(event.target.value);

  return (
    <Wrapper className={className} {...props}>
      <Attributes
        attributes={{
          "project id": project.projectId,
          "project title": project.title,
          index: bug.index,
          reporter: bug.reporter.name,
        }}
      ></Attributes>
      <Edit title="edit info">
        <Form
          submitText={"Save"}
          directory={`/bug-edit?projectId=${projectId}&bugId=${bug.id}`}
          body={{ ...changes }}
        >
          <Separator />
          <Field label="title" changed={title !== bug.title}>
            <InputText value={title} onChange={set(setTitle)} />
          </Field>
          <Separator />
          <Field label="description" changed={description !== bug.description}>
            <InputTextArea value={description} onChange={set(setDescription)} />
          </Field>
          <Separator />
          <Field
            label="reproducible"
            changed={reproducible !== bug.reproducible}
          >
            <InputBoolean
              checked={reproducible}
              onChange={() => setReproducible((reproducible) => !reproducible)}
            />
          </Field>
          <Separator />
          <Field label="impact" changed={Number(impact) !== bug.impact}>
            <InputSelect
              value={impact}
              onChange={set((value) => setImpact(Number(value)))}
            />
          </Field>
          <Separator />
          <Field label="urgency" changed={Number(urgency) !== bug.urgency}>
            <InputSelect
              value={urgency}
              onChange={set((value) => setUrgency(Number(value)))}
            />
          </Field>
          <Separator />
        </Form>
      </Edit>
      <Attachments title="attachments">
        <Separator />
        <Field label="upload an attachment">
          <InputFile selectFile={selectAttachment} />
        </Field>
        <Separator />
      </Attachments>
      <AddAssignee title="Add an assignee">
        <Form
          submitText="Add"
          disabled={!assignee}
          directory={`/assign?projectId=${projectId}&bugId=${bug.id}&userId=${assignee?.userId}`}
        >
          <Separator />
          <Field label="Select">
            {assigneesAvailable?.length ? (
              <InputSelect
                options={assigneesAvailable.map((assignee) => ({
                  value: [assignee.userId],
                  content: assignee.name,
                }))}
                onChange={set((value) => setAssignee(value))}
              />
            ) : (
              <>No assignees available</>
            )}
          </Field>
          <Separator />
        </Form>
      </AddAssignee>
      <AddTag title="Add a tag">
        <Separator />
        <Form
          submitText="Add"
          disabled={!tag}
          directory={`/tag-add?projectId=${projectId}&bugId=${bug.id}&tagId=${tag?.id}`}
        >
          <Field label="Select">
            {tagsAvailable?.length ? (
              <InputSelect
                options={tagsAvailable.map((tag) => ({
                  value: tag.id,
                  content: tag.title,
                }))}
                onChange={set((value) => setTag(Number(value)))}
              />
            ) : (
              <>No tags available</>
            )}
          </Field>
          <Separator />
        </Form>
      </AddTag>
      <Tags bug={bug} />
    </Wrapper>
  );
};

export default Home;
