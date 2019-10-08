import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

export function SignIn(props) {
  const handleSignIn = () => {
    auth.signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Sign In
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paper style={{ width: "480px", marginTop: "50px", padding: "30px" }}>
          <TextField placeholder="Email" fullWidth={true} />
          <TextField
            placeholder="Password"
            fullWidth={true}
            style={{ marginTop: "30px" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "30px"
            }}
          >
            <Typography>
              Don't have an account? <Link to="/signup">Sign up!</Link>
            </Typography>
            <Button
              color="primary"
              variant="contained"
              to="/app"
              component={Link}
              onClick={handleSignIn}
            >
              Sign In
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export function SignUp(props) {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Sign Up
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paper style={{ width: "480px", marginTop: "50px", padding: "30px" }}>
          <TextField placeholder="Email" fullWidth={true} />
          <TextField
            placeholder="Password"
            fullWidth={true}
            style={{ marginTop: "30px" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "30px"
            }}
          >
            <Typography>
              Already have an account? <Link to="/">Sign In!</Link>
            </Typography>
            <Button
              color="primary"
              variant="contained"
              to="/app"
              component={Link}
            >
              Sign Up
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export function App(props) {
  const [drawer_open, setDrawerOpen] = useState(false);
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => {
              setDrawerOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            style={{ flexGrow: 1, marginLeft: "30px" }}
          >
            My App
          </Typography>
          <Typography color="inherit" style={{ marginRight: "30px" }}>
            {" "}
            Hi! johndavidlee1@gmail.com
          </Typography>
          <Button color="inherit" to="/" component={Link}>
            {" "}
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        open={drawer_open}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        <div>Hello</div>
      </Drawer>
    </div>
  );
}
