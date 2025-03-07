import { Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import router from "../../Routes";
import { useReactiveVar } from "@apollo/client";
import { authenticatedVar } from "../../../constants/authenticated";

const MobileBranding = () => {
  const authenticated = useReactiveVar(authenticatedVar);

  return (
    <>
      <ChatIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        variant="h5"
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
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          cursor: "pointer",
          fontFamily: "monospace",
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
export default MobileBranding;
