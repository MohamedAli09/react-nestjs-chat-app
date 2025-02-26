import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { RouterProvider } from "react-router";
import router from "./components/Routes";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";
import Guard from "./components/auth/Guard";
const theme = createTheme({ palette: { mode: "dark" } });
function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Guard>
            <RouterProvider router={router} />
          </Guard>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
