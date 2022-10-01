import { Box, Chip } from "@mui/material";
import { useMemo } from "react";

interface Props {
  connectionStatus: string;
}

export default function StatusChip({ connectionStatus }: Props) {
  const color = useMemo(() => {
    if (connectionStatus === "Open") return "success";
    if (
      connectionStatus === "Closing" ||
      connectionStatus === "Closed" ||
      connectionStatus === "Uninstantiated"
    )
      return "error";

    return "primary";
  }, [connectionStatus]);

  return (
    <Box marginLeft="10px">
      <Chip color={color} label={connectionStatus} />
    </Box>
  );
}
