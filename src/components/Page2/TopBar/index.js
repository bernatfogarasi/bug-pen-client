import styled from "styled-components";

const Wrapper = styled.div`
  grid-row: 1;
  grid-column: 2;
  border: 1px solid;
`;

const TopBar = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      TopBar
    </Wrapper>
  );
};

export default TopBar;
