import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { API_URL } from "./urls";
import excludedRoutes from "./excluded-routes";
import { onLogout } from "../utils/logout";
import { snackVar } from "./snack";
import { UNKNOWN_ERROR_SNACK_MESSAGE } from "./erros";

const errorLink = onError((error) => {
  // Handle authentication errors
  if (
    error.graphQLErrors?.length &&
    (
      error.graphQLErrors?.[0]?.extensions?.originalError as {
        statusCode?: number;
      }
    )?.statusCode === 401
  ) {
    if (!excludedRoutes.includes(window.location.pathname)) {
      onLogout();
    }
  }

  // Handle network errors
  if (error.networkError) {
    snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
  }
});

const httplink = new HttpLink({
  uri: `${API_URL}/graphql`,
  credentials: "include",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${API_URL}/graphql`,
  link: errorLink.concat(httplink),
  credentials: "include",
});

export default client;
