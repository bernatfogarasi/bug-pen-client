import useApp from "hooks/useApp";
import { Fragment } from "react";
import styled from "styled-components";
import imageArrow from "assets/icons/arrow2.png";
import Link from "components/Link";
import { titleFont } from "functions/text";
import LoaderDots from "components/LoaderDots";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-grow: 1;
  overflow-x: auto;
`;

const Name = styled(Link)`
  border-radius: 4px;
  padding: 10px;
  border: 1px solid;
  user-select: none;
  :hover {
    background: #eee;
  }
`;

const Arrow = styled.img`
  height: 15px;
`;

const Breadcrumbs = ({ className, ...props }) => {
  const { project, profile } = useApp();
  const names = window.location.pathname
    .split("/")
    .filter((name) => name)
    .reduce(
      (previous, name) => [
        ...previous,
        {
          name,
          display:
            previous?.at(-1)?.name === "projects"
              ? project?.title
              : previous?.at(-1)?.name === "profiles"
              ? profile?.name
              : titleFont(name),
          to: "/" + [...previous.map(({ name }) => name), name].join("/"),
        },
      ],
      []
    );

  return (
    <Wrapper className={className} {...props}>
      {names.map(({ name, display, to }, index) => (
        <Fragment key={name}>
          {index > 0 && <Arrow src={imageArrow}></Arrow>}
          <Name to={to}>{display || <LoaderDots />}</Name>
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default Breadcrumbs;
