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

const SignUp = () => {
  const classes = useStyles();

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
                <Typography variant="h5">Create your account</Typography>
                <form className={classes.form}>
                  <TextField
                    className={classes.textInput}
                    id="name"
                    label="Name"
                    variant="outlined"
                  />
                  <TextField
                    className={classes.textInput}
                    id="user"
                    label="Usename"
                    variant="outlined"
                  />
                  <TextField
                    className={classes.textInput}
                    type="email"
                    id="Email"
                    label="Email"
                    variant="outlined"
                  />
                  <TextField
                    type="password"
                    className={classes.textInput}
                    id="password"
                    label="Password"
                    variant="outlined"
                  />
                  <TextField
                    type="password"
                    className={classes.textInput}
                    id="passwordConfirmation"
                    label="Password confirmation"
                    variant="outlined"
                  />
                </form>
              </Box>

              <Box>
                <Button variant="contained" className={classes.primaryButton}>
                  Sign up
                </Button>
                <Typography>
                  Already have an account? 
                  <Link to="login" className={classes.button}>Login</Link>
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
