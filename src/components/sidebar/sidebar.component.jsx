import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import ClearIcon from "./../../assets/icons/Clear.svg";
import SettingsIcon from "./../../assets/icons/settings.svg";
// import LogoClear from "./../../assets/icons/logo-clear.svg";
// import GroupIcon from "./../../assets/icons/group.svg";
// import FollowUpIcon from "./../../assets/icons/seguimiento.svg";
// import WhatsappIcon from "./../../assets/icons/whatsapp.svg";
// import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  sideBar: {
    borderRadius: "0px 15px 15px 0px",
    height: "100%",
    width: "220px",
  },
  logoClear: {
    width: "133px",
    height: "33px",
    margin: "32px 63px 13px 24px",
  },
  version: {
    margin: "0px 0px 0px 22px",
  },
  versionText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "9px",
    lineHeight: "11px",
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.version,
  },
  userName: {
    margin: "32px 0px 0px 22px",
  },
  userNameText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "17px",
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.userName,
  },
  userMail: {
    margin: "4px 0px 0px 22px",
  },
  userMailText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "14px",
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.userMail,
  },
}));

const ListItemLink = (props) => {
  const { icon, primary, to } = props;
  const customLink = (props) => <Link to={to} {...props} />;
  return (
    <ListItem button component={customLink}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  );
};

const CustomListItem = withStyles({
  root: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    display: "flex",
    alignItems: "center",
    //color:
  },
})(ListItemLink);

const SideBar = ({ sideBarOpen, toggleMenu }) => {
  const classes = useStyles();
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    toggleMenu(open);
  };
  return (
    <Drawer
      classes={{ paper: classes.sideBar }}
      anchor="left"
      open={sideBarOpen}
      onClose={toggleDrawer(false)}
    >
      <div className={classes.sideBar}>
        {/* <div className={classes.logoClear}>
          <img src={LogoClear} alt="Logo Clear" />
        </div>
        <div className={classes.version}>
          <span className={classes.versionText}>Versión 1.0</span>
        </div>
        <div className={classes.userName}>
          <span className={classes.userNameText}>Pedro Conchas</span>
        </div>
        <div className={classes.userMail}>
          <span className={classes.userMailText}>
            pedro.conchas@clearcheck.us
          </span>
        </div> */}
        <List>
          <CustomListItem
            to="/"
            icon={<img src={ClearIcon} alt="Clear Icon" />}
            primary="Dev Extreme"
          />
          <CustomListItem
            to="/scheduler"
            icon={<img src={SettingsIcon} alt="Settings Icon" />}
            primary="Ej2 React"
          />
        </List>
      </div>
    </Drawer>
  );
};

export default SideBar;
