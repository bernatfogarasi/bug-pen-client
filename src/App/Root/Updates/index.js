import Section from "components/Section";
import styled from "styled-components";

import Update from "./Update";

const Wrapper = styled(Section)`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-auto-rows: min-content;
  gap: 10px;
`;

const updates = [
  {
    date: "2022-01-13",
    title: "Sidebar",
    description: "Smooth collapsible sidebar with animations.",
  },
  {
    date: "2022-01-12",
    title: "Member count",
    description: "The number of memberships is displayed on the home page.",
  },
  {
    date: "2022-01-12",
    title: "Open a project",
    description: "Projects can be opened from the 'Projects' page.",
  },
  {
    date: "2022-01-10",
    title: "Create a project",
    description: "Now it is possible to create a project",
  },
  {
    date: "2022-01-10",
    title: "Authentication",
    description:
      "Login or sign up with your social account using the Auth0 API.",
  },
];

const Updates = ({ className, ...props }) => {
  return (
    <Wrapper className={className} title="latest updates" {...props}>
      {updates.map((update, index) => (
        <Update key={index} index={index} update={update} />
      ))}
    </Wrapper>
  );
};

export default Updates;
