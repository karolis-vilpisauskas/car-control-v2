import {
  AppBar,
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "./assets/logo";

function App() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Container>
            <Logo
              style={{
                width: 140,
                height: 70,
              }}
            />
          </Container>
        </Toolbar>
      </AppBar>
      <Container component="main">
        <Box>
          <Card style={{ marginTop: 10 }}>
            <CardContent>
              <Typography variant="h5">Amount</Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default App;
