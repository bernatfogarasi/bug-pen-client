import styled from "styled-components";

const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 1;
  overflow: auto;
  width: 200px;
  border: 1px solid;
`;

const Menu = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      Menu
    </Wrapper>
  );
};

export default Menu;
