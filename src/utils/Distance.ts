import { useCallback, useState } from "react";

export const useDistance = () => {
  const [distance, setDistance] = useState("");

  const handleDistanceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setDistance(e.target.value),
    []
  );

  return {
    distance,
    handleDistanceChange,
  };
};
