import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Popup from "../Utilities/Popup";
import { useDispatch, useSelector } from "react-redux";
import { getSignIn, getSignUp } from "../Store/AuthRequests";
import { downloadReumse, logout } from "../Reducers/AuthRequests";

function Layout() {
  const dispatch = useDispatch();

  const { loading, userInfo, userToken, error, success } = useSelector(
    (state) => state.authRequests
  );
  const [signInData, setSignInData] = useState({});
  const [signUpData, setSignUpData] = useState({});
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  // signUp Popup

  const openSignUp = (val) => {
    setSignUpModal(val);
  };
  // signIn Popup

  const openSignIn = (val) => {
    setSignInModal(val);
  };

  const handleSignIn = (e) => {
    const { name, value } = e.target;
    setSignInData((values) => ({ ...values, [name]: value }));
  };

  const handleSignUp = (e) => {
    const { name, value } = e.target;
    setSignUpData((values) => ({ ...values, [name]: value }));
  };
  const handleSignInSubmit = (e) => {
    e.preventDefault();

    dispatch(getSignIn(signInData));
  };
  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    dispatch(getSignUp(signUpData));
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    dispatch(logout());
  };

  const printResume = () => {
    dispatch(downloadReumse(true));
  };
  return (
    <>
      <header>
        <Navbar bg="white" expand="lg" className="shadow-sm rounded mb-2">
          <Container>
            <Navbar.Brand href="#home">Resume Builder</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="d-flex justify-content-end"
            >
              <Nav className="mt-auto">
                <Nav.Link to={"/"} as={NavLink}>
                  Resume
                </Nav.Link>
                <Nav.Link to={"/coverLetter"} as={NavLink}>
                  CoverLetter
                </Nav.Link>

                <Nav.Link
                  onClick={printResume}
                  className="ms-2"
                  style={{ backgroundColor: "#62A8EA", color: "white" }}
                >
                  Download
                </Nav.Link>

                <Button
                  className="ms-2"
                  style={{ backgroundColor: "#62A8EA", color: "white" }}
                  onClick={() => openSignUp(true)}
                >
                  Sign Up
                </Button>

                {userInfo.name ? (
                  <NavDropdown title={userInfo.name} id="username">
                    <NavDropdown.Item onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Button
                    className="ms-2"
                    variant="contained"
                    style={{ backgroundColor: "#13b493", color: "white" }}
                    onClick={() => openSignIn(true)}
                  >
                    Sign In
                  </Button>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <Popup trigger={signInModal} setTrigger={setSignInModal}>
        <h2>Resume Builder</h2>
        <p>Please enter information accordingly</p>
        <form onSubmit={handleSignInSubmit}>
          <div className="container d-flex flex-column mb-4 align-items-center">
            <div>
              <TextField
                variant="outlined"
                label="Email"
                name="email"
                required
                onChange={(e) => handleSignIn(e)}
                className="mb-2"
                type={"email"}
                value={signInData.email || ""}
                sx={{ width: "40ch" }}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                label="Password"
                onChange={(e) => handleSignIn(e)}
                type={"password"}
                name="password"
                value={signInData.password || ""}
                required
                sx={{ width: "40ch" }}
              />
            </div>

            <div>
              <Button
                variant="contained"
                sx={buttonSx}
                type={"submit"}
                disabled={loading}
              >
                Login
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}

              {userInfo.name ? <p>{userInfo.name} login successfull</p> : <></>}
            </div>
          </div>
        </form>
      </Popup>
      <Popup trigger={signUpModal} setTrigger={setSignUpModal}>
        <h2>Resume Builder</h2>
        <p>Please enter information accordingly</p>

        <form onSubmit={handleSignUpSubmit}>
          <div className="container d-flex flex-column mb-4 align-items-center">
            <div>
              <TextField
                variant="outlined"
                label="Full Name"
                required
                name="name"
                value={signUpData.name || ""}
                className="mb-2"
                onChange={(e) => handleSignUp(e)}
                type={"name"}
                sx={{ width: "40ch" }}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                label="Email"
                required
                onChange={(e) => handleSignUp(e)}
                name="email"
                value={signUpData.email || ""}
                className="mb-2"
                type={"email"}
                sx={{ width: "40ch" }}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                label="Password"
                onChange={(e) => handleSignUp(e)}
                name="password"
                value={signUpData.password || ""}
                type={"password"}
                required
                sx={{ width: "40ch" }}
              />
            </div>

            <div>
              <Button
                variant="contained"
                sx={buttonSx}
                type={"submit"}
                disabled={loading}
              >
                Sign Up
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}

              {success === true ? (
                <p>you have sign Up successfully Kindly Login now</p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </form>
      </Popup>
    </>
  );
}

export default Layout;
