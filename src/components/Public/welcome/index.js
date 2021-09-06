import { Link, useHistory } from "react-router-dom";
import { Grid, Box, Paper, Typography, Button } from "@material-ui/core";
import Twlogo from "../../../images/tw_logo.svg";
import Twlogoblue from "../../../images/tw_logo_blue.svg";
import useStyles from "./style";

const Welcome = () => {
  const classes = useStyles();
  const history = useHistory();

  const login = () => history.push("login");
  const signup = () => history.push("signup");

  return (
    <>
      <Grid container direction="row" className={classes.container}>
        <Grid item xs={5}>
          <Box bgcolor="#1DA1F2" className={classes.box}>
            <img src={Twlogo} alt="Logo Twitter" />
          </Box>
        </Grid>

        <Grid item xs={7}>
          <Box className={classes.box}>
            <Paper elevation={2} className={classes.paper}>
              <Box className={classes.box} mb={5}>
                <img src={Twlogoblue} alt="Logo Twitter" />
              </Box>
              <Box mb={5}>
                <Typography variant="h4">Welcome to Twitter</Typography>
                <Button
                  variant="outlined"
                  className={classes.button}
                  onClick={login}
                >
                  Login now
                </Button>
              </Box>

              <Box>
                <Typography>
                  Dont have an account?
                  <Link to="signup" className={classes.button}>
                    Join free today
                  </Link>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={signup}
                  >
                    Sign Up
                  </Button>
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Welcome;
