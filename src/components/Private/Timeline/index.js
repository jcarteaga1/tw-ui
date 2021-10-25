import Metadata from "../../Metadata";
import { Grid } from "@material-ui/core";
import Tweet from "../Tweet";

const Timeline = () => {
  return (
    <>
      <Metadata
        title="Timeline"
        content={"Content scrolled"}
      />
    <Grid container spacing={24}>
      <Grid>
        <Tweet/>
      </Grid>
    </Grid>
    </>
  );
};

export default Timeline;
