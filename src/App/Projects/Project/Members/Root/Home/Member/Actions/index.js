import Option from "components/Option";
import Select from "components/Select";
import useApp from "hooks/useApp";
import { useState } from "react";
import styled from "styled-components";

import Action from "./Action";

const Wrapper = styled.div`
  display: flex;
  margin: -10px;
  /* background: #eee; */
  padding: 5px;
  gap: 5px;
  margin-left: auto;
`;

const Text = styled.div`
  text-align: center;
`;

const Highlight = styled.div`
  display: inline-block;
  color: #00bfa6;
  margin: 0 5px;
`;

const Actions = ({ className, member, ...props }) => {
  const { project } = useApp();

  const [selectedAuthorization, setSelectedAuthorization] = useState();

  const projectId = project.projectId;

  const allowed = {
    remove:
      project.authorization === "Administrator" ||
      (project.authorization === "Director" &&
        ["Contributor", "Spectator"].includes(member.authorization)),

    authorize: Object.entries({
      Spectator: ["Administrator", "Director"].includes(project.authorization),
      Contributor: ["Administrator", "Director"].includes(
        project.authorization
      ),
      Director: project.authorization === "Administrator",
      Administrator: project.authorization === "Administrator",
    }).reduce(
      (previous, [type, isAllowed]) =>
        isAllowed && type !== member.authorization
          ? [...previous, type]
          : previous,
      []
    ),
  };

  const onAuthorizationChange = (event) =>
    setSelectedAuthorization(event.target.value);

  return (
    <Wrapper className={className} {...props}>
      <>
        <Action
          directory={`/member-authorize?userId=${
            member.userId
          }&projectId=${projectId}&authorization=${
            allowed.authorize.includes(selectedAuthorization)
              ? selectedAuthorization
              : allowed.authorize[0]
          }`}
          title="Authorize"
        >
          <Text>
            Current authorization: <Highlight>{member.authorization}</Highlight>
          </Text>
          <Select
            onChange={onAuthorizationChange}
            value={
              allowed.authorize.includes(selectedAuthorization)
                ? selectedAuthorization
                : allowed.authorize[0]
            }
          >
            {allowed.authorize.map((type, index) => (
              <Option key={type} value={type} selected={index === 0}>
                {type}
              </Option>
            ))}
          </Select>
        </Action>
        <Action
          directory={`/member-remove?userId=${member.userId}&projectId=${projectId}`}
          title={"Remove"}
        >
          <Text>
            Are you sure you want to remove user
            <Highlight>{member.name}</Highlight> from project
            <Highlight>{project.title}</Highlight>?
          </Text>
        </Action>
      </>
    </Wrapper>
  );
};

export default Actions;
