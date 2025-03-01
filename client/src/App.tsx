import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Grid, // Use the stable Grid component
} from "@mui/material";
import { RouterProvider } from "react-router";
import router from "./components/Routes";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";
import Guard from "./components/auth/Guard";
import Header from "./components/header/Header";
import Snackbar from "./components/snackbar/Snackbar";
import ChatList from "./components/ChatList/ChatList";

const theme = createTheme({ palette: { mode: "dark" } });
function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Grid container>
          <Grid item md={3}>
            <ChatList />
          </Grid>
          <Grid item md={9}>
            <Container>
              <Guard>
                <RouterProvider router={router} />
              </Guard>
            </Container>
          </Grid>
        </Grid>
        <Snackbar />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
