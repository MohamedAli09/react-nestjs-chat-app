import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { API_URL } from "./urls";
import excludedRoutes from "./excluded-routes";
import router from "../components/Routes";

const logoutLink = onError((error) => {
  if (
    error.graphQLErrors?.length &&
    (
      error.graphQLErrors?.[0]?.extensions?.originalError as {
        statusCode?: number;
      }
    )?.statusCode === 401
  ) {
    if (!excludedRoutes.includes(window.location.pathname)) {
      router.navigate("/login");
      client.resetStore();
    }
  }
});
const httplink = new HttpLink({
  uri: `${API_URL}/graphql`,
  credentials: "include",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${API_URL}/graphql`,
  link: logoutLink.concat(httplink),
  credentials: "include",
});

export default client;
