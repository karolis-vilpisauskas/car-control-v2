import {
  Box,
  Button,
  ButtonProps,
  CircularProgress,
  Grid,
  TextField,
  TextFieldProps,
} from "@mui/material";

interface Props {
  loading?: boolean;
  buttonProps: ButtonProps;
  textFieldProps: TextFieldProps;
  noWrap?: boolean;
}

export default function CarAction({
  loading,
  buttonProps,
  textFieldProps,
  noWrap,
}: Props) {
  const { children: buttonPropsChildren, ...rest } = buttonProps;

  return (
    <Box marginTop="10px">
      <Grid
        container
        alignItems="center"
        spacing={1}
        width="100%"
        sx={{
          marginRight: 0,
        }}
      >
        <Grid item sm={9} xs={noWrap ? 9 : 12}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            {...textFieldProps}
          />
        </Grid>
        <Grid item sm={3} xs={noWrap ? 3 : 12}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              height: "40px",
              width: "calc(100% + 8px)",
            }}
            {...rest}
          >
            {loading ? (
              <CircularProgress color="secondary" size={25} />
            ) : (
              buttonPropsChildren
            )}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
