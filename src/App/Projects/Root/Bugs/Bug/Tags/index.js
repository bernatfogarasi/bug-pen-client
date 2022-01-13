import styled from "styled-components";
import BugTag from "components/BugTag";
import TableCell from "components/TableCell";

const tagsDefault = [
  {
    text: "unstarted",
    style: { color: "black", borderColor: "grey", backgroundColor: "yellow" },
  },
  {
    text: "in progress",
    style: { color: "#fff", borderColor: "grey", backgroundColor: "blue" },
  },
  {
    text: "testing",
    style: { color: "#fff", background: "#3D348B" },
  },
  {
    text: "stuck",
    style: { color: "#fff", borderColor: "red", background: "red" },
  },
  {
    text: "closed",
    style: {
      color: "black",
      borderColor: "lightgrey",
      background: "lightgrey",
    },
  },
];

const Wrapper = styled(TableCell)``;

const Tag = ({ className, ...props }) => {
  const tag = tagsDefault[2];
  return (
    <Wrapper className={className} {...props}>
      <BugTag tag={tag} />
    </Wrapper>
  );
};

export default Tag;
