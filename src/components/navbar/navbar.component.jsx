import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { ThemeContext } from "../../themes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor:
      theme.palette.type !== "dark" ? "#fff" : theme.palette.primary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    borderRadius: "50px",
    color:
      theme.palette.type !== "dark"
        ? theme.palette.text.secondary
        : theme.palette.text.primary,
  },
  notificationButton: {
    marginRight: theme.spacing(2),
    borderRadius: "50px",
    backgroundColor: theme.palette.type !== "dark" ? "#f6f6f6" : null,
    color:
      theme.palette.type !== "dark"
        ? theme.palette.text.secondary
        : theme.palette.text.primary,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: "bold",
    color:
      theme.palette.type !== "dark"
        ? theme.palette.text.secondary
        : theme.palette.text.primary,
  },
}));

const NavBar = ({ toggleMenu }) => {
  const setThemeName = useContext(ThemeContext);
  const classes = useStyles();
  const mobileMenuId = "primary-search-account-menu-mobile";
  const [anchorEl, setAnchorEl] = useState(null);

  const handleThemeOptions = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleTheme = (theme) => {
    setThemeName(theme);
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);
  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => handleTheme("darkTheme")}>Dark Theme</MenuItem>
      <MenuItem onClick={() => handleTheme("lightTheme")}>Light Theme</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" className={classes.navBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => toggleMenu(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            React App
          </Typography>
          {/* <IconButton
            edge="end"
            className={classes.notificationButton}
            color="inherit"
            aria-label="menu"
          >
            <Badge badgeContent={1} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
          <IconButton
            className={classes.notificationButton}
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleThemeOptions}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
};

export default NavBar;
