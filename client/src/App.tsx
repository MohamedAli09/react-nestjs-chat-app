import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { RouterProvider } from "react-router";
import router from "./components/Routes";
const theme = createTheme({ palette: { mode: "dark" } });
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
