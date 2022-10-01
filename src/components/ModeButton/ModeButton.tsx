import { useMemo } from "react";
import { Laptop, Smartphone } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Mode, useModeStore } from "../../state/Mode";

interface Props {
  variant?: Mode;
}

export default function ModeButton({ variant }: Props) {
  const { setModeDesktop, setModeMobile, mode } = useModeStore(
    ({ mode, setModeDesktop, setModeMobile }) => ({
      mode,
      setModeDesktop,
      setModeMobile,
    })
  );

  const onClick = useMemo(
    () => (variant === "desktop" ? setModeDesktop : setModeMobile),
    [setModeDesktop, setModeMobile, variant]
  );

  const isActive = useMemo(() => mode === variant, [mode, variant]);

  const Icon = useMemo(
    () => (variant === "desktop" ? Laptop : Smartphone),
    [variant]
  );

  return (
    <IconButton
      color={isActive ? "primary" : undefined}
      onClick={onClick}
      style={{
        outline: isActive ? "4px auto #000000" : undefined,
      }}
    >
      <Icon />
    </IconButton>
  );
}
