import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import Auth from "./Auth";
import { useCreateUser } from "../../hooks/useCreateUser";

const SignUp = () => {
  const [createuser] = useCreateUser();
  return (
    <Auth
      submitlabel="Signup"
      onSubmit={async ({ email, password }) => {
        await createuser({
          variables: {
            createUserInput: {
              email,
              password,
            },
          },
        });
      }}
    >
      <Link to={"/login"} style={{ alignSelf: "center" }}>
        <MuiLink>Login</MuiLink>
      </Link>
    </Auth>
  );
};
export default SignUp;
