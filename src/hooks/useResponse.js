import useApp from "./useApp";

const useResponse = () => {
  const { setProjects, setProject, setMembershipCount } = useApp();
  const save = (json) => {
    const methods = {
      projects: setProjects,
      project: setProject,
      membershipCount: setMembershipCount,
    };

    Object.entries(json).map(([key, value]) => {
      const method = methods?.[key];
      if (method) method(value);
    });
  };
  return { save };
};

export default useResponse;
