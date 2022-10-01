import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  ThemeProvider,
} from "@mui/material";
import theme from "./style/Theme";
import Header from "./components/Header/Header";
import CarAction from "./components/CarAction/CarAction";
import { useDistance } from "./utils/Distance";
import { useSockets } from "./utils/Sockets";

function App() {
  const { distance, handleDistanceChange } = useDistance();
  const { connectionStatus, driveDistance } = useSockets();

  return (
    <ThemeProvider theme={theme}>
      <Header connectionStatus={connectionStatus} />
      <Box
        component="main"
        width="calc(100vw - 20px)"
        height="calc(100vh - 98px)"
        marginX="auto"
        marginTop="78px"
        paddingTop="20px"
      >
        <Container>
          <Grid container>
            <Grid item sm={4} xs={12}>
              <Card style={{ marginTop: 10 }}>
                <CardContent>
                  <CarAction
                    textFieldProps={{
                      label: "Distance to drive (cm)",
                      value: distance,
                      onChange: handleDistanceChange,
                    }}
                    buttonProps={{
                      children: "Drive",
                      onClick: driveDistance(distance),
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
