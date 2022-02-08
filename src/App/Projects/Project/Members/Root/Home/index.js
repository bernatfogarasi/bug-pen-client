import Page from "components/Page";
import useApp from "hooks/useApp";
import styled from "styled-components";
import Member from "./Member";

const Wrapper = styled(Page)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`;

const Home = ({ className, ...props }) => {
  const { project } = useApp();
  return (
    <Wrapper className={className} {...props}>
      {project.members.map((member, index) => (
        <Member key={index} member={member} />
      ))}
    </Wrapper>
  );
};

export default Home;
