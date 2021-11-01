import React, { useState, useContext } from "react";
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
import Metadata from "../../Metadata";
import http from "../../../helpers/http";
import { AuthContext } from "../../../context/AuthProvider";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  const home = () => history.push("home");

  const handleOnChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleInput = async () => {
    const response = await http.post("/users/login", { username, password });
    const token = response.data?.data?.token;
    if (token) {
      setAuth(true);
      localStorage.setItem("token", token);
      history.push("/home");
    } else {
      history.push("/login");
    }
  };

  return (
    <>
      <Metadata title="Login" content={"Get access to twitter"} />
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
                    onChange={handleOnChangeUsername}
                  />
                  <TextField
                    className={classes.textInput}
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    onChange={handleOnChangePassword}
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
                  variant="contained"
                  className={classes.primaryButton}
                  onClick={handleInput}
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
