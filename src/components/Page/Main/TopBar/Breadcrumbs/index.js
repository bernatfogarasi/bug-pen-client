import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
`;

const Breadcrumbs = ({ className, ...props }) => {
  const names = window.location.pathname.split("/").filter((value) => value);
  return (
    <Wrapper className={className} {...props}>
      {names?.length &&
        names.map((item) => item[0].toUpperCase() + item.substring(1))}
    </Wrapper>
  );
};

export default Breadcrumbs;
