import ButtonModalForm from "components/ButtonModalForm";
import FormField from "components/FormField";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(ButtonModalForm)``;

const CreateProject = ({ className, ...props }) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  return (
    <Wrapper
      className={className}
      title="Create a project"
      body={{ title, description }}
      directory="/project-create"
      {...props}
    >
      <FormField label="Title" required setValue={setTitle} value={title} />
      <FormField
        label="Description"
        setValue={setDescription}
        value={description}
      />
    </Wrapper>
  );
};

export default CreateProject;
