import './signup.module.css'

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import  Link  from "@mui/material/Link";
import {Link as RouterLink} from "react-router"
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


const SignupViewComponent = () => {
  
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  
  return (
    <>
      <Container sx={{ maxWidth: "xl" }}>
        <Box
          component="section"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <Card
            sx={{
              minWidth: 200,
              width: { xs: "60%", md: "40%" },
              boxShadow: 1,
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  color: "black",
                  variant: "h3",
                  textAlign: "center",
                  fontFamily: "Open Sans",
                  fontSize: "19px",
                  fontWeight: 700,
                  marginY: "10px",
                }}
                gutterBottom
              >
                Sign Up
              </Typography>

              <Typography
                sx={{
                  color: "black",
                  variant: "h3",
                  textAlign: "center",
                  fontFamily: "Open Sans",
                  fontSize: "19px",
                  fontWeight: 700,
                  marginBottom: "32px",
                }}
                gutterBottom
              >
                Have an account?{" "}
                <Link
                  component={RouterLink}
                  to="../auth/signin"
                  sx={{ textDecoration: "none" }}
                >
                  Sign In
                </Link>
              </Typography>

              <Box sx={{ textAlign: "center" }}>
                <TextField
                  id="outlined-email"
                  label="Email"
                  variant="outlined"
                  placeholder="hello@mail.com"
                  autoComplete="true"
                  sx={{ mb: 3, width: { md: "82%" } }}
                />

                <FormControl
                  sx={{ mb: 3, width: { md: "82%" } }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={togglePasswordVisibility}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Box>
            </CardContent>
            <CardActions>
              <Box sx={{ width: "100%", textAlign: "center" }}>
                <LoadingButton
                  fullWidth
                  size="large"
                  type="submit"
                  color="inherit"
                  variant="contained"
                  sx={{
                    width: { md: "80%" },
                    borderRadius: 2,
                    mb: 2,
                    backgroundColor: "#1976d2",
                    color: "white",
                  }}
                >
                  Sign in
                </LoadingButton>
              </Box>
            </CardActions>
            <Box>
              <Typography variant="body1" gutterBottom>
                OR
              </Typography>

              <Button>Sign In with Google</Button>
            </Box>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default SignupViewComponent;