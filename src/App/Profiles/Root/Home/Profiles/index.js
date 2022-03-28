import Section from "components/Section";
import useApp from "hooks/useApp";
import styled from "styled-components";

import Profile from "./Profile";

const Wrapper = styled(Section)`
  display: grid;
  grid-auto-rows: min-content;
  gap: 5px;
`;

const Empty = styled.div``;

const Profiles = ({ className, textSearched, ...props }) => {
  const { profiles } = useApp();
  return (
    <Wrapper
      className={className}
      title={
        textSearched
          ? `Results for '${textSearched}' (${profiles.length})`
          : "Results"
      }
      {...props}
    >
      {profiles?.length ? (
        profiles.map((profile, index) => (
          <Profile
            key={profile.id}
            textSearched={textSearched}
            profile={profile}
            index={index}
          />
        ))
      ) : (
        <Empty>None</Empty>
      )}
    </Wrapper>
  );
};

export default Profiles;
