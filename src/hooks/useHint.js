import useApp from "./useApp";

const useHint = () => {
  const { setHint } = useApp();

  const setTemporaryHint = (message, type) => {
    setHint({ message, type });
    setTimeout(() => {
      setHint(undefined);
    }, 3000);
  };

  return {
    setHint: setTemporaryHint,
  };
};

export default useHint;
