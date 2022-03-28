import ButtonModalForm from "components/ButtonModalForm";
import Select from "components/Select";
import useApp from "hooks/useApp";
import { useState } from "react";
import styled from "styled-components";

import Project from "./Project";

const Wrapper = styled(ButtonModalForm)``;

const AddMember = ({ className, ...props }) => {
  const { projects, profile } = useApp();

  const [selectedProjectId, setSelectedProjectId] = useState();

  const onChange = (event) => {
    setSelectedProjectId(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Wrapper
      className={className}
      title="Add user to project"
      directory={`/member-add?userId=${profile?.userId}&projectId=${
        selectedProjectId || projects?.[0]?.projectId
      }`}
      {...props}
    >
      <Select value={selectedProjectId} onChange={onChange}>
        {projects.map((project, index) => (
          <Project key={project.id} index={index} project={project} />
        ))}
      </Select>
    </Wrapper>
  );
};

export default AddMember;
