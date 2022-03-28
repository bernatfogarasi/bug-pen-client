import Table from "components/Table";
import TableHead from "components/TableHead";
import styled from "styled-components";

import Bug from "./Bug";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
`;

const names = [
  "Title",
  "Description",
  "Attachments",
  "Tags",
  "Assignees",
  "Priority",
  "Reporter",
  "Reproducible",
  "Severity",
];

const Bugs = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Table>
        <TableHead names={names} />
        <Bug />
      </Table>
    </Wrapper>
  );
};

export default Bugs;
