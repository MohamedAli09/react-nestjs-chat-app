import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import * as React from "react";
import useLogout from "../../hooks/useLogout";
import { onLogout } from "../../utils/logout";
import { snackVar } from "../../constants/snack";
import { UNKNOWN_ERROR_SNACK_MESSAGE } from "../../constants/erros";

const Settings = ({
  anchorElUser,
  handleOpenUserMenu,
  handleCloseUserMenu,
  settings,
}: {
  anchorElUser: HTMLElement | null;
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
  settings: string[];
}) => {
  const { logout } = useLogout();
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      > 
        <MenuItem
          key="logout"
          onClick={async () => {
            try {
              await logout();

              onLogout();

              handleCloseUserMenu();
            } catch (err) {
              snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
            }
          }}
        >
          <Typography sx={{ textAlign: "center" }}>Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Settings;
