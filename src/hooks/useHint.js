import useApp from "./useApp";

const useHint = () => {
  const { setHint } = useApp();

  const setTemporaryHint = (...params) => {
    setHint(...params);
    setTimeout(() => {
      setHint(undefined);
    }, 3000);
  };

  return {
    setHint: setTemporaryHint,
  };
};

export default useHint;
