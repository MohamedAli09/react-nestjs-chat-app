import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
const theme = createTheme({ palette: { mode: "dark" } });
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <h1>Dark Mode</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
