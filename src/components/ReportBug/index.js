import ButtonModalForm from "components/ButtonModalForm";
import FormField from "components/FormField";
import useApp from "hooks/useApp";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(ButtonModalForm)``;

const ReportBug = ({ className, ...props }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { project } = useApp();
  return project ? (
    <Wrapper
      className={className}
      title="Report a bug"
      body={{ title, description }}
      directory={`/bug-report?projectId=${project.projectId}`}
      {...props}
    >
      <FormField
        label="Title"
        value={title}
        setValue={setTitle}
        value={title}
        required
      />
      <FormField
        label="Description"
        value={description}
        setValue={setDescription}
        value={description}
      />
    </Wrapper>
  ) : (
    <></>
  );
};

export default ReportBug;
