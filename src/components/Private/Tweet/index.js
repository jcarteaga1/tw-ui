import React, { useState } from "react";
import Metadata from "../../Metadata";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

// Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import useStyles from "./style";
import NewTweet from "../NewTweet";

const Tweet = () => {
  const classes = useStyles();
  const [openNewTweet, setOpenNewTweet] = useState(false);

  const handleOpenNewTweet = () => {
    setOpenNewTweet(!openNewTweet);
  };

  return (
    <>
      <Metadata title="Tweet" content={"Description about your post"} />
      <div>
        <Card square>
          <CardHeader
            avatar={
              <Avatar src="https://pbs.twimg.com/profile_images/1431105140858179592/DiNAE9jb_400x400.jpg" />
            }
            title="Dolcey Mendoza Jr"
            subheader={<span>@dolceymendozajr •5h</span>}
            action={<ExpandMoreIcon className={classes.moreIcon} />}

            // avatar={<Avatar src={this.props.data.profileimg}/>}
            // title={this.props.data.name}
            // subheader= {<span>{this.props.data.tid} •{this.props.data.time}</span>}
            // action={<ExpandMoreIcon className={classes.moreIcon}/>}
          />
          <CardContent className={classes.content}>
            <Typography className={classes.text}>
              This is a tweet. It can be long, or short. Depends on what you
              have to say. It can have some hashtags too. #likethis This is a
              tweet. It can be long, or short. Depends on what you have to say.
              It can have some hashtags too. #likethis
            </Typography>
            <CardMedia
              image="https://pbs.twimg.com/profile_images/1431105140858179592/DiNAE9jb_400x400.jpg"
              className={classes.media}
            />
            {/* {this.props.data.image && (<CardMedia
                image={this.props.data.image}
                className={classes.media}
              />)} */}
          </CardContent>
          <CardActions className={classes.bottomActions}>
            <ChatBubbleOutlineIcon onClick={handleOpenNewTweet} />
            <FavoriteBorderIcon />
          </CardActions>
        </Card>
        <Divider />
        <NewTweet open={openNewTweet} />
      </div>
    </>
  );
};

export default Tweet;
