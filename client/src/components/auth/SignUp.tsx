import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import Auth from "./Auth";
import { useCreateUser } from "../../hooks/useCreateUser";
import { useState } from "react";
import { extractErrorMassage } from "../../utils/errors";
import { useLogin } from "../../hooks/useLogin";
import { UNKNOWN_ERROR_MESSAGE } from "../../constants/erros";

const SignUp = () => {
  const [createuser] = useCreateUser();
  const [error, setError] = useState("");
  const { login } = useLogin();
  return (
    <Auth
      submitlabel="Signup"
      error={error}
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
          await login({ email, password });
          setError("");
        } catch (err) {
          const errorMassage = extractErrorMassage(err);
          if (errorMassage) {
            setError(errorMassage);
            return;
          } else setError(UNKNOWN_ERROR_MESSAGE);
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
