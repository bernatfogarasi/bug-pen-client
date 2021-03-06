import TableCell from "components/TableCell";
import Tag from "components/Tag";
import styled from "styled-components";

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

const Tags = ({ className, ...props }) => {
  const tag = tagsDefault[2];
  return (
    <Wrapper className={className} {...props}>
      <Tag tag={tag} />
    </Wrapper>
  );
};

export default Tags;
