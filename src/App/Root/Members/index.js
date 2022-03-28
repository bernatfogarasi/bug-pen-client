import LoaderDots from "components/LoaderDots";
import useApp from "hooks/useApp";
import useRequest from "hooks/useRequest";
import { useEffect, useState } from "react";
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
  const { membershipsCount, refresh } = useApp();
  const [loading, setLoading] = useState(true);
  const { get } = useRequest();

  useEffect(() => {
    get("/memberships-count", () => setLoading(false));
  }, [refresh]);

  return loading ? (
    <LoaderDots />
  ) : (
    <Wrapper className={className} {...props}>
      <Title>Membership count:</Title>
      <Count>{membershipsCount}</Count>
    </Wrapper>
  );
};

export default Members;
