import { Link } from "react-router-dom";
import Twlogoblue from "../../../images/tw_logo_blue.svg";
import useStyles from "./style";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HomeIcon from "@material-ui/icons/Home";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PersonIcon from "@material-ui/icons/Person";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";

import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Timeline from "../Timeline"
const Home = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.gridContainer} container spacing={0}>
      <Grid
        container
        className={classes.logoGrid}
        item
        xs={12}
        lg={3}
        md={3}
        spacing={0}
      >
        <div className={classes.gridHeader}>
          <img className={classes.img} src={Twlogoblue} alt="Logo Twitter" />
        </div>
        <List
          className={classes.list}
          component="nav"
          aria-label="main mailbox folders"
        >
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MailOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BookmarkBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Bookmarks" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="List" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MoreHorizRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="More" />
          </ListItem>
        </List>
        <Button className={classes.button}>Tweet</Button>
      </Grid>
      <Grid
        className={classes.homeGrid}
        container
        item
        xs={12}
        lg={5}
        md={5}
        spacing={0}
      >
        <div className={classes.gridHeader}>
          <h2>Home</h2>
        </div>
        <div className={classes.gridContainer}>
          <Timeline></Timeline>
        </div>
      </Grid>
      <Grid
        className={classes.searchGrid}
        container
        item
        xs={12}
        lg={4}
        md={4}
        spacing={0}
      >
        <div className={classes.gridHeader}>
          <Input
            placeholder="Search"
            disableUnderline
            className={classes.input}
            id="input-with-icon-adornment filled"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
