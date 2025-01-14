
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Link } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";


const SigninViewComponent = () => {
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
                }}
                gutterBottom
              >
                Sign In
              </Typography>

              <Typography
                sx={{
                  color: "black",
                  variant: "h3",
                  textAlign: "center",
                  fontFamily: "Open Sans",
                  fontSize: "19px",
                  fontWeight: 700,
                }}
                gutterBottom
              >
                Don't have an account? <Link sx={{}}>Get Started</Link>
              </Typography>

              <TextField
                id="outlined-email"
                label="Email"
                variant="outlined"
                placeholder="hello@mail.com"
                autoComplete="true"
                sx={{ mb: 3, width: { md: "70%" } }}
              />

              <TextField
                id="outlined-password"
                label="Password"
                variant="outlined"
                sx={{ mb: 3, width: { md: "70%" } }}
              />
            </CardContent>
            <CardActions>
              <Button
                size="large"
                variant="contained"
                sx={{
                  mx: "auto",
                  width: { md: "60%" },
                  borderRadius: 2,
                  mb: 2,
                }}
              >
                Sign In
              </Button>

              <LoadingButton loading variant="outlined">
                Submit
              </LoadingButton>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default SigninViewComponent



