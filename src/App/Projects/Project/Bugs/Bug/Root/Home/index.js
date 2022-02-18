import { useEffect, useState } from "react";

import Assignees from "./Assignees";
import Attachments from "./Attachments";
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

// import { useFileUpload } from "use-file-upload";

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

const Attach = styled(Section)``;

const AddTag = styled(Section)``;

const AddAssignee = styled(Section)``;

const Field = styled(Field_)`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
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
  // const [attachments, selectAttachments] = useFileUpload();
  const [attachments, setAttachments] = useState();
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

  useEffect(() => {
    setAssignee(assigneesAvailable?.[0]);
  }, [assigneesAvailable]);

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
        columns
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
          <Field label="title" changed={title !== bug.title}>
            <InputText value={title} onChange={set(setTitle)} />
          </Field>
          <Field label="description" changed={description !== bug.description}>
            <InputTextArea value={description} onChange={set(setDescription)} />
          </Field>
          <Field
            label="reproducible"
            changed={reproducible !== bug.reproducible}
          >
            <InputBoolean
              checked={reproducible}
              onChange={() => setReproducible((reproducible) => !reproducible)}
            />
          </Field>
          <Field label="impact" changed={Number(impact) !== bug.impact}>
            <InputSelect
              value={impact}
              onChange={set((value) => setImpact(Number(value)))}
            />
          </Field>
          <Field label="urgency" changed={Number(urgency) !== bug.urgency}>
            <InputSelect
              value={urgency}
              onChange={set((value) => setUrgency(Number(value)))}
            />
          </Field>
        </Form>
      </Edit>
      <Attach title="attach files">
        <Form
          submitText="Attach"
          disabled={!attachments?.length}
          directory={`/attach?projectId=${projectId}&bugId=${bug.id}`}
          files
          body={attachments}
        >
          <Field label="upload files">
            <InputFile setFile={setAttachments} />
          </Field>
          {attachments?.length ? (
            [...attachments].map((attachment, index) => (
              <Field label="Selected file" key={index}>
                {attachment.name}
              </Field>
            ))
          ) : (
            <Field label="No files selected"></Field>
          )}
        </Form>
      </Attach>
      <Attachments columns bug={bug} />
      <AddAssignee title="assign to member">
        <Form
          submitText="Assign"
          disabled={!assignee}
          directory={`/assign?projectId=${projectId}&bugId=${bug.id}&userId=${assignee?.userId}`}
        >
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
        </Form>
      </AddAssignee>
      <Assignees columns bug={bug} />
      <AddTag title="Add a tag">
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
        </Form>
      </AddTag>
      <Tags columns bug={bug} />
    </Wrapper>
  );
};

export default Home;
