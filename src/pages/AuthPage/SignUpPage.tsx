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
import { NavLink, useNavigate } from "react-router-dom";
import { useUserSignUpMutation } from "../../redux/features/user/userApi";
import { isEmailValid } from "../../utils/isValidEmailChecker";

const registerfail = () => toast.error("Please submit again");
const validEmail = () => toast.error("Enter valid email");
const registerSuccessful = () => toast.success("Login Successful");

const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // react-router
  const navigate = useNavigate();

  const [userSignUp, { data, isLoading, error }] = useUserSignUpMutation();

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(data?.data));
    if (error) {
      registerfail();
    }
    if (data) {
      registerSuccessful();

      navigate("/");
    }
  }, [data, error]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    if (!isEmailValid(email)) {
      validEmail();
    } else {
      // Handle form submission logic here
      userSignUp({ email: email, password: password, fullName: fullName });
      setEmail("");
      setPassword("");
      setFullName("");
    }
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
                  Sign UP
                </span>
                Here
              </Typography>
              <Container>
                <TextField
                  label="Full Name"
                  type="name"
                  variant="standard"
                  value={fullName}
                  onChange={handleFullNameChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  required={true}
                  label="Email"
                  type="email"
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
                  Sign UP
                </Button>
              </Container>
              <Typography variant={"body2"} textAlign={"center"}>
                Already Have An Account ?{" "}
                <NavLink to="/signin">Sign in Here</NavLink>{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SignUpPage;
