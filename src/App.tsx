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
import { test } from "./utils/Api";

function App() {
  const getData = async () => {
    const data = await test();
    return data;
  };

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
            <CardActions>{JSON.stringify(getData())}</CardActions>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default App;
