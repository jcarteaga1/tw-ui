import { Link } from "react-router-dom";
import {
  Grid,
  Box,
  Paper,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import Twlogoblue from "../../../images/tw_logo_blue.svg";
import useStyles from "./style";
import Metadata from "../../Metadata";

const PasswordRecovery = () => {
  const classes = useStyles();

  return (
    <>
      <Metadata
        title="Password Recovery"
        content={"The best place to share and meet new friends"}
      />
      <Grid container direction="row" className={classes.container}>
        <Grid item xs={12}>
          <Box className={classes.box}>
            <Paper className={classes.paper}>
              <Box className={classes.box} mb={5}>
                <img src={Twlogoblue} alt="Logo Twitter" />
                <Typography>My Twitter</Typography>
              </Box>
              <Box mb={5}>
                <Typography variant="h5">Password recovery</Typography>
                <form className={classes.form}>
                  <TextField
                    className={classes.textInput}
                    id="user"
                    label="Email or Username"
                    variant="outlined"
                  />
                </form>
              </Box>

              <Box>
                <Button variant="contained" className={classes.primaryButton}>
                  Recover your password
                </Button>
                <Typography>
                  Back to{" "}
                  <Link to="login" className={classes.button}>
                    Login
                  </Link>
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PasswordRecovery;
