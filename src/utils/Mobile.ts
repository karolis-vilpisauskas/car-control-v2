import { useMediaQuery, useTheme } from "@mui/material";

export const useMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return isMobile;
};
