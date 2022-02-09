import styled from "styled-components";
import Tag from "components/Tag";

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
    style: {},
  },
  {
    text: "stuck",
    style: { color: "#fff", background: "red" },
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

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

const Tags = ({ className, indexes, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {indexes.map((index) => (
        <Tag key={index} tag={tagsDefault[index]} />
      ))}
    </Wrapper>
  );
};

export default Tags;
