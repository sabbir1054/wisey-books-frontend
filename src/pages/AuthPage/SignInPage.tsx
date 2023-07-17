/* eslint-disable @typescript-eslint/no-unused-vars */
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useUserSignInMutation } from "../../redux/features/user/userApi";

const loginfail = () => toast.error("Please Enter Valid Email and Password");
const loginSuccessfull = () => toast.success("Login Successful");

const SignInPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const from = searchParams.get("from");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({});

  const [userSignIn, { data, isLoading, error }] = useUserSignInMutation();
  const dispatch = useDispatch();



  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(data?.data));
    if (error) {
      loginfail();
    }
    if (data) {
      loginSuccessfull();
      if (from) {
        navigate(from);
      } else {
        navigate("/");
      }
    }
  }, [data, error]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    userSignIn({ email: email, password: password });
    setEmail("");
    setPassword("");
  
  };

  return (
    <div style={{ backgroundColor: "#FFF6F7", minHeight: "100vh" }}>
      <Container
        sx={{
          paddingY: "10vh",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6} border={"1px solid #e2e2e2"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                paddingY: 10,
              }}
            >
              {" "}
              <Typography variant="h5" fontWeight={"bold"}>
                <span style={{ textTransform: "uppercase", color: "#F75454" }}>
                  {" "}
                  Enrich{" "}
                </span>
                Your Soul
              </Typography>
              <img
                src="https://i.ibb.co/bgdTsJz/auth.png"
                alt=""
                style={{ padding: "2vh" }}
              />
              <Typography variant="h5" fontWeight={"bold"}>
                <span style={{ textTransform: "uppercase", color: "#F75454" }}>
                  {" "}
                  Stay Connected{" "}
                </span>
                With Us
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} border={"1px solid #e2e2e2"}>
            <Box sx={{ paddingY: 10 }}>
              <Box display={"flex"} justifyContent={"center"}>
                {isLoading && (
                  <CircularProgress disableShrink sx={{ color: "#F75454" }} />
                )}
                <Toaster />
              </Box>
              <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
                <span
                  style={{
                    textTransform: "uppercase",
                    color: "#F75454",
                    marginRight: "8px",
                  }}
                >
                  {" "}
                  Sign In
                </span>
                Here
              </Typography>
              <Container>
                <TextField
                  label="Email"
                  type="email"
                  required={true}
                  variant="standard"
                  value={email}
                  onChange={handleEmailChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  required={true}
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="standard"
                  value={password}
                  onChange={handlePasswordChange}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  disableElevation
                  variant="outlined"
                  color="primary"
                  onClick={handleSubmit}
                  sx={{
                    transition: "all 0.3s ease-in",
                    borderColor: "#F75454",
                    color: "#F75454",
                    borderRadius: 0,
                    marginY: 2,
                    "&:hover": {
                      backgroundColor: "#F75454",
                      borderColor: "#F75454",
                      color: "white",
                    },
                  }}
                >
                  Sign In
                </Button>
                <Typography variant={"body2"} textAlign={"center"}>
                  You don't Have any account{" "}
                  <NavLink to="/signup">Sign up Here</NavLink>{" "}
                </Typography>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SignInPage;
