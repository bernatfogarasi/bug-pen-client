import Page from "components/Page";
import Section from "components/Section";
import useApp from "hooks/useApp";
import styled from "styled-components";

const Wrapper = styled(Page)`
  padding: 10px;
`;

const Tags = styled(Section)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Home = ({ className, ...props }) => {
  const { project } = useApp();

  return (
    <Wrapper className={className} {...props}>
      <Tags title="Tags"></Tags>
    </Wrapper>
  );
};

export default Home;
