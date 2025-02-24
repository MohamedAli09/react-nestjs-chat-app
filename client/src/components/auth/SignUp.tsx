import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import Auth from "./Auth";
import { useCreateUser } from "../../hooks/useCreateUser";
import { useState } from "react";

const SignUp = () => {
  const [createuser] = useCreateUser();
  const [error, setError] = useState("");
  return (
    <Auth
      submitlabel="Signup"
      onSubmit={async ({ email, password }) => {
        try {
          await createuser({
            variables: {
              createUserInput: {
                email,
                password,
              },
            },
          });
        } catch (err) {
          console.error(err);
          throw err;
        }
      }}
    >
      <Link to={"/login"} style={{ alignSelf: "center" }}>
        <MuiLink>Login</MuiLink>
      </Link>
    </Auth>
  );
};
export default SignUp;
