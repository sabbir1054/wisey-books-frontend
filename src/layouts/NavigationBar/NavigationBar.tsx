import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setUser } from "../../redux/features/user/userSlice";
import { useAppSelector } from "../../redux/hook";
const pages = [
  { name: "Books", path: "books" },
  { name: "Add Books", path: "add-books" },
];
const settings = ["Wishlist", "Read Soon", "Logout"];

const NavigationBar = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    localStorage.clear();
    dispatch(setUser(""));
  };

  return (
    <div>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "white",
          borderBottom: "1px solid #eae8e4",
          color: "black",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <img src="/assets/logo.png" alt="" width={40} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 2,
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              WISEYBOOK
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <>
                  <NavLink
                    to={`/${page.path}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {page.name}
                    </Button>
                  </NavLink>
                </>
              ))}
            </Box>

            {user ? (
              <Box sx={{ flexGrow: 0 }}>
                <></>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <AccountCircleIcon
                      sx={{ color: "#452C81", fontSize: "40px" }}
                    />
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
                  <MenuItem onClick={handleCloseUserMenu}>
                    <NavLink
                      to="/wishlist"
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      <Typography textAlign="center">Wishlist</Typography>
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <NavLink
                      to="/read-soon"
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      <Typography textAlign="center">Read Soon</Typography>
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <NavLink
                      onClick={handleLogOut}
                      to="/"
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      <Typography textAlign="center">Log out</Typography>
                    </NavLink>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Box display={"flex"} alignItems={"center"}>
                <NavLink to={`/signin`} style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      my: 2,
                      color: "black",
                      display: "block",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Sign In
                  </Button>
                </NavLink>
                <p>/</p>
                <NavLink to={`/signup`} style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      my: 2,
                      color: "black",
                      display: "block",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Sign Up
                  </Button>
                </NavLink>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
