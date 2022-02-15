import useApp from "./useApp";

const useResponse = () => {
  const {
    setProjects,
    setProject,
    setMembershipsCount,
    setProfiles,
    setProfile,
    setMe,
  } = useApp();

  const save = (json) => {
    const methods = {
      projects: setProjects,
      project: setProject,
      membershipsCount: setMembershipsCount,
      profiles: setProfiles,
      profile: setProfile,
      me: setMe,
    };

    Object.entries(json).forEach(([key, value]) => {
      const method = methods?.[key];
      if (method) method(value);
    });
  };
  return { save };
};

export default useResponse;
