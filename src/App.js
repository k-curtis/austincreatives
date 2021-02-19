import { Box, Typography, makeStyles, useTheme } from "material-ui/core";

const styles = (theme) => {
  return {
    container: {
      backgroundColor: theme.palette.default,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      color: theme.palette.light,
    },
  };
};

function App() {
  const theme = useTheme();
  console.log("theme: ", theme);
  const classes = makeStyles(styles)();
  return (
    <Box className={classes.container}>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Typography variant="h3">Austin Creatives</Typography>
      <Typography variant="body1">Rapid 3D Prototyping</Typography>
    </Box>
  );
}

export default App;
