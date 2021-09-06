import { Link, useHistory } from "react-router-dom";
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

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const home = () => history.push("home");

  return (
    <>
      <Grid container direction="row" className={classes.container}>
        <Grid item xs={12}>
          <Box className={classes.box}>
            <Paper className={classes.paper}>
              <Box className={classes.box} mb={5}>
                <img src={Twlogoblue} alt="Logo Twitter" />
                <Typography>My Twitter</Typography>
              </Box>
              <Box mb={5}>
                <Typography variant="h5">Login</Typography>
                <form className={classes.form}>
                  <TextField
                    className={classes.textInput}
                    id="user"
                    label="Email or Username"
                    variant="outlined"
                  />
                  <TextField
                    className={classes.textInput}
                    id="password"
                    label="Password"
                    variant="outlined"
                  />
                </form>
                <Typography>
                  <Link to="PasswordRecovery" className={classes.button}>
                    Forgot password?
                  </Link>
                </Typography>
              </Box>

              <Box>
                <Button
                  onClick={home}
                  variant="contained"
                  className={classes.primaryButton}
                >
                  Login now
                </Button>
                <Typography>
                  Dont have an account?
                  <Link to="signup" className={classes.button}>
                    Join free today
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

export default Login;
