import React, { useState } from "react";
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

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleOnChangeName = (prop) => (event) => {
    setUserData({ ...userData, [prop]: event.target.value });
  };

  const handleInput = async () => {
    const response = await http.post("/users", userData);
    response.status === 200 ? history.push("/login") : history.push("/signup");
  };

  return (
    <>
      <Metadata
        title="Sign Up"
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
                <Typography variant="h5">Create your account</Typography>
                <form className={classes.form}>
                  <TextField
                    className={classes.textInput}
                    id="name"
                    label="Name"
                    variant="outlined"
                    onChange={handleOnChangeName("name")}
                  />
                  <TextField
                    className={classes.textInput}
                    id="user"
                    label="Usename"
                    variant="outlined"
                    onChange={handleOnChangeName("username")}
                  />
                  <TextField
                    className={classes.textInput}
                    type="email"
                    id="Email"
                    label="Email"
                    variant="outlined"
                    onChange={handleOnChangeName("email")}
                  />
                  <TextField
                    type="password"
                    className={classes.textInput}
                    id="password"
                    label="Password"
                    variant="outlined"
                    onChange={handleOnChangeName("password")}
                  />
                  <TextField
                    type="password"
                    className={classes.textInput}
                    id="passwordConfirmation"
                    label="Password confirmation"
                    variant="outlined"
                    onChange={handleOnChangeName("passwordConfirmation")}
                  />
                </form>
              </Box>

              <Box>
                <Button
                  variant="contained"
                  className={classes.primaryButton}
                  onClick={handleInput}
                >
                  Sign up
                </Button>
                <Typography>
                  Already have an account?
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

export default SignUp;
