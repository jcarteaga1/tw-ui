import Metadata from "../../Metadata";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useStyles from "./style";
import { Grid } from "@material-ui/core";

const Tweet = (props) => {
  const classes=useStyles();
  const { user, content, imgURL } = props.tweets

  return (
    <>
      <Metadata
        title="Tweet"
        content={"Description about your post"}
      />
      <Grid>
        <Card square>
          <CardHeader
            avatar={<Avatar src='https://img.europapress.es/fotoweb/fotonoticia_20170323155432_1200.jpg'/>}
            title={<b>{user.name}</b>}
            subheader={`@${user.username}`}
          />

          <CardContent className={classes.content}>
            <Typography className={classes.text}>
              {content}
            </Typography>

            {/* <CardMedia
              disabled
              image={imgURL }
              className={classes.media}
            /> */}
          </CardContent>

          <CardActions className={classes.bottomActions}>
            <ChatBubbleOutlineIcon/>
            <FavoriteBorderIcon/>
          </CardActions>

        </Card>
        <Divider/>
      </Grid>
    </>
  );
};

export default Tweet;