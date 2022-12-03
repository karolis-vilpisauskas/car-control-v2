import { useCallback, useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");

  const handleValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  );

  return {
    value,
    handleValueChange,
  };
};
