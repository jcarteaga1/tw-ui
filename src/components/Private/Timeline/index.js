import Metadata from "../../Metadata";
import { Grid } from "@material-ui/core";
import Tweet from "../Tweet";
import http from "../../../helpers/http";
import { useEffect, useState } from "react";
import {GET_CONSTANT, GET_URL} from "../../../helpers/constants";

const Timeline = () => {
  const [tweets, setTweets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const getTweets = async () => {
      const response = await http.get(GET_URL.TWEETS, GET_CONSTANT.HEADER_ACCESS);
      setTweets(response.data.data)
      setLoading(false)
    }
    getTweets()
  },[])

  return !loading && (
    <>
      <Metadata
        title="Timeline"
        content={"Content scrolled"}
      />
      <Grid container direction="column">
        
      {tweets.map(tweet => (
        <Grid item>
          <Tweet tweets={tweet}/>
        </Grid>
      ))}
      </Grid>
      
    </>
  );
};

export default Timeline;
