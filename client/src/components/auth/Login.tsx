import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import { useLogin } from "../../hooks/useLogin";

import Auth from "./Auth";

const Login = () => {
  const { login } = useLogin();
  return (
    <Auth submitlabel="Login" onSubmit={(request) => login(request)}>
      <Link to={"/signup"} style={{ alignSelf: "center" }}>
        <MuiLink>Signup</MuiLink>
      </Link>
    </Auth>
  );
};
export default Login;
