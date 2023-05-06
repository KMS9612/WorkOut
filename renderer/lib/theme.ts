import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#FF8375",
    },
    secondary: {
      main: "#ff75ac",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "outlined",
        size: "large",
        sx: { position: "static" },
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: "normal",
      },
    },
  },
});

export default theme;
