import useApp from "hooks/useApp";
import styled from "styled-components";
import Page from "components/Page";
import InputText_ from "components/InputText";
import Section_ from "components/Section";
import Attributes from "components/Attributes";
import { useState } from "react";
import InputTextArea_ from "components/InputTextArea";
import Field_ from "components/Field";
import InputFile_ from "components/InputFile";
import InputSelect from "components/InputSelect";
import { useFileUpload } from "use-file-upload";
import InputBoolean from "components/InputBoolean";

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

const Tags = styled(Section)``;

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

const Home = ({ className, bug, ...props }) => {
  const { project } = useApp();

  const [title, setTitle] = useState(bug.title);
  const [description, setDescription] = useState(bug.description);
  const [reproducible, setReproducible] = useState(bug.reproducible);
  const [impact, setImpact] = useState(bug.impact);
  const [urgency, setUrgency] = useState(bug.urgency);
  const [assignees, setAssignees] = useState(bug.assignees);
  const [newAssignee, setNewAssignees] = useState();
  const [newAttachment, selectNewAttachment] = useFileUpload();
  const [attachments, setAttachments] = useState(bug.attachments);
  const [tags, setTags] = useState(bug.tags);
  const [newTag, setNewTag] = useState();

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
      <Edit title="attributes">
        <Separator />
        <Field label="title" changed={title !== bug.title}>
          <InputText value={title} onChange={set(setTitle)} />
        </Field>
        <Separator />
        <Field label="description" changed={description !== bug.description}>
          <InputTextArea value={description} onChange={set(setDescription)} />
        </Field>
        <Separator />
        <Field label="reproducible" changed={reproducible !== bug.reproducible}>
          <InputBoolean
            checked={reproducible}
            onChange={() => setReproducible((reproducible) => !reproducible)}
          />
        </Field>
        <Separator />
        <Field label="impact" changed={impact !== bug.impact}>
          <InputSelect value={impact} onChange={set(setImpact)} />
        </Field>
        <Separator />
        <Field label="urgency" changed={urgency !== bug.urgency}>
          <InputSelect value={urgency} onChange={set(setUrgency)} />
        </Field>
        <Separator />
      </Edit>
      <Attachments title="attachments">
        <Separator />
        <Field
          label="upload an attachment"
          changed={attachments !== bug.attachments}
        >
          <InputFile selectFile={selectNewAttachment} />
        </Field>
        <Separator />
      </Attachments>
      <Assignees title="assignees">
        <Field label="add an assignee" changed={assignees !== bug.assignees}>
          <InputSelect
            options={project.members.map((member) => ({
              value: [member.userId],
              content: member.name,
            }))}
          />
        </Field>
        <Separator />
      </Assignees>
      <Tags title="tags">
        <Field label="add tag" changed={tags !== bug.tags}>
          tags: '{JSON.stringify(bug.tags)}'
          <InputSelect
            options={project?.tags?.map((tag) => ({
              value: [tag.id],
              content: tag.title,
            }))}
          />
        </Field>
        <Separator />
      </Tags>
    </Wrapper>
  );
};

export default Home;
