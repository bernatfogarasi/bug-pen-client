import Section from "components/Section";
import useApp from "hooks/useApp";
import useRequest from "hooks/useRequest";
import { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  font-size: 24px;
`;

const Title = styled.div``;

const Count = styled.div``;

const Members = ({ className, ...props }) => {
  const { membershipCount, refresh } = useApp();

  const { get } = useRequest();

  useEffect(() => {
    get("/memberships-count");
  }, [refresh]);

  return (
    <Wrapper className={className} {...props}>
      <Title>Membership count:</Title>
      <Count>{membershipCount}</Count>
    </Wrapper>
  );
};

export default Members;
