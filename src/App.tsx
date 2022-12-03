import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import theme from "./style/Theme";
import Header from "./components/Header/Header";
import CarAction from "./components/CarAction/CarAction";
import { Commands, useSockets } from "./utils/Sockets";
import {
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowUp,
} from "@mui/icons-material";
import carTopView from "./assets/car-top-view.png";
import { useCallback, useState } from "react";
import { useInput } from "./utils/Input";

function App() {
  const { value: distance, handleValueChange: handleDistanceChange } =
    useInput();
  const { value: autoPidP, handleValueChange: handleAutoPidPChange } =
    useInput();
  const { value: autoPidI, handleValueChange: handleAutoPidIChange } =
    useInput();
  const { value: autoPidD, handleValueChange: handleAutoPidDChange } =
    useInput();
  const { connectionStatus, sendCommandWithValue, sendCommandWithoutValue } =
    useSockets();

  const [autoEnabled, setAutoEnabled] = useState(false);

  const handleAutoEnable = useCallback(() => {
    sendCommandWithoutValue(autoEnabled ? Commands.Stop : Commands.Auto)();
    setAutoEnabled((prevAutoEnabled) => !prevAutoEnabled);
  }, [autoEnabled, sendCommandWithoutValue]);

  return (
    <ThemeProvider theme={theme}>
      <Header connectionStatus={connectionStatus} />
      <Box
        component="main"
        height="calc(100vh - 78px)"
        marginX="auto"
        marginTop="58px"
        paddingTop="20px"
        paddingX="23px"
      >
        <Container>
          <Grid container spacing={1}>
            <Grid item md={4} xs={12}>
              <Card sx={{ marginTop: "10px" }}>
                <CardContent>
                  <Grid
                    container
                    spacing={0}
                    justifyContent="center"
                    alignItems="center"
                  >
                    {/* Top Row */}
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4} justifyContent="center" display="flex">
                      <IconButton
                        onClick={sendCommandWithoutValue(Commands.Straight)}
                        sx={{
                          border: "3px solid black",
                          padding: "0px",
                          marginBottom: "5px",
                        }}
                        size="small"
                      >
                        <KeyboardArrowUp
                          sx={{
                            fontSize: 50,
                            color: "black",
                          }}
                        />
                      </IconButton>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    {/* Mid Row */}
                    <Grid item xs={4} justifyContent="flex-end" display="flex">
                      <IconButton
                        onClick={sendCommandWithoutValue(Commands.TurnL)}
                        sx={{
                          border: "3px solid black",
                          padding: "0px",
                          marginRight: "20px",
                        }}
                      >
                        <KeyboardArrowLeft
                          sx={{
                            fontSize: 50,
                            color: "black",
                          }}
                        />
                      </IconButton>
                    </Grid>
                    <Grid item xs={4} display="flex" justifyContent="center">
                      <img src={carTopView} alt="car-top-view" />
                    </Grid>
                    <Grid item xs={4}>
                      <IconButton
                        onClick={sendCommandWithoutValue(Commands.TurnR)}
                        sx={{
                          border: "3px solid black",
                          padding: "0px",
                          marginLeft: "20px",
                        }}
                      >
                        <KeyboardArrowRight
                          sx={{
                            fontSize: 50,
                            color: "black",
                          }}
                        />
                      </IconButton>
                    </Grid>
                    {/* Bottom Row */}
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4} justifyContent="center" display="flex">
                      <IconButton
                        onClick={sendCommandWithoutValue(Commands.TurnR)}
                        sx={{
                          border: "3px solid black",
                          padding: "0px",
                          marginTop: "5px",
                        }}
                      >
                        <KeyboardArrowDown
                          sx={{
                            fontSize: 50,
                            color: "black",
                          }}
                        />
                      </IconButton>
                    </Grid>
                    <Grid item xs={4}></Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ marginTop: "10px" }}>
                <CardContent>
                  <Button
                    onClick={handleAutoEnable}
                    variant="contained"
                    color={autoEnabled ? "error" : "primary"}
                    fullWidth
                  >
                    {autoEnabled ? "Disable Auto" : "Enable Auto"}
                  </Button>
                  <Divider
                    sx={{
                      marginY: "10px",
                    }}
                  />
                  <CarAction
                    textFieldProps={{
                      label: "P",
                      value: autoPidP,
                      onChange: handleAutoPidPChange,
                    }}
                    buttonProps={{
                      children: "Set",
                      onClick: sendCommandWithValue(
                        autoPidP,
                        Commands.AutoPidP
                      ),
                    }}
                    noWrap
                  />
                  <CarAction
                    textFieldProps={{
                      label: "I",
                      value: autoPidI,
                      onChange: handleAutoPidIChange,
                    }}
                    buttonProps={{
                      children: "Set",
                      onClick: sendCommandWithValue(
                        autoPidI,
                        Commands.AutoPidI
                      ),
                    }}
                    noWrap
                  />
                  <CarAction
                    textFieldProps={{
                      label: "D",
                      value: autoPidD,
                      onChange: handleAutoPidDChange,
                    }}
                    buttonProps={{
                      children: "Set",
                      onClick: sendCommandWithValue(
                        autoPidD,
                        Commands.AutoPidD
                      ),
                    }}
                    noWrap
                  />
                  <Divider
                    sx={{
                      marginY: "10px",
                    }}
                  />
                  <CarAction
                    textFieldProps={{
                      label: "Distance to drive (cm)",
                      value: distance,
                      onChange: handleDistanceChange,
                    }}
                    buttonProps={{
                      children: "Drive",
                      onClick: sendCommandWithValue(distance, Commands.Drive),
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
