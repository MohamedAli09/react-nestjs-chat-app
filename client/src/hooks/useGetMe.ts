import { useQuery } from "@apollo/client";

import { graphql } from "../gql";
const getMeDocument = graphql(`
  query GetMe {
    me {
      _id
      email
    }
  }
`);
const useGetMe = () => {
  return useQuery(getMeDocument, {
    errorPolicy: "ignore", // overlay error ignored
  });
};

export default useGetMe;
