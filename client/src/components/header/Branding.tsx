import { Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import router from "../Routes";
import { useReactiveVar } from "@apollo/client";
import { authenticatedVar } from "../../constants/authenticated";

const Branding = () => {
  const authenticated = useReactiveVar(authenticatedVar);

  return (
    <>
      <ChatIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        onClick={() => {
          if (authenticated) {
            router.navigate("/");
          } else {
            router.navigate("/login");
          }
        }}
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          cursor: "pointer",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        CHATTER
      </Typography>
    </>
  );
};

export default Branding;
