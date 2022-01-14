import { useEffect, useState } from "react";

const useDelay = (value, milliseconds = 1000) => {
  const [valueDelayed, setValueDelayed] = useState(value);

  useEffect(() => {
    setTimeout(() => {
      setValueDelayed(value);
    }, milliseconds);
  }, [value]);

  return valueDelayed;
};

export default useDelay;
