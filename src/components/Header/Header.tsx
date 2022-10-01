import { AppBar, Box, Container, Grid, Toolbar } from "@mui/material";
import { useMobile } from "../../utils/Mobile";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import ModeButton from "../ModeButton/ModeButton";
import StatusChip from "../StatusChip/StatusChip";

interface Props {
  connectionStatus: string;
}

export default function Header({ connectionStatus }: Props) {
  const mobile = useMobile();

  return (
    <AppBar color="secondary">
      <Toolbar>
        <Container>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={6} sm={6}>
              <Box display="flex" alignItems="center">
                <HeaderLogo />
                <StatusChip connectionStatus={connectionStatus} />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Grid
                container
                spacing={1}
                justifyContent={mobile ? "center" : "flex-end"}
              >
                <Grid item>
                  <ModeButton variant="desktop" />
                </Grid>
                <Grid item>
                  <ModeButton variant="mobile" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
