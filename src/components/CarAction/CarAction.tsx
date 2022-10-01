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
}

export default function CarAction({
  loading,
  buttonProps,
  textFieldProps,
}: Props) {
  const { children: buttonPropsChildren, ...rest } = buttonProps;

  return (
    <Box marginTop="10px">
      <Grid container alignItems="center" spacing={1} width="100%">
        <Grid item sm={9} xs={12}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            {...textFieldProps}
          />
        </Grid>
        <Grid item sm={3} xs={12}>
          <Button variant="contained" fullWidth {...rest}>
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
