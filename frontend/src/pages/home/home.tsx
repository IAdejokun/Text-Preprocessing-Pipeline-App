import './home.module.css'

import Box from "@mui/material/Box"
import InputFileUpload from '../../components/fileupload';
import TextField  from '@mui/material/TextField';
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from '@mui/material/Typography';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// import { useState } from 'react';

const HomeComponent = () => {

  //  const [fileName, setFileName] = useState("");
  //  const [textFieldValue, setTextFieldValue] = useState("");

  //  const handleFileChange = (event) => {
  //    if (event.target.files.length > 0) {
  //      setFileName(event.target.files[0].name);
  //    }
  //  };
  
  // const isButtonDisabled = !textFieldValue.trim() || !fileName;
  
  return (
    <>
      <Box
        component="section"
        sx={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6">User Count: 20</Typography>

        <Box>
          <h2>Clean your data in a Jiffy</h2>

          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-around",
              marginBottom: 3,
            }}
          >
            <TextField
              variant="outlined"
              slotProps={{
                input: {
                  style: { color: "white" }, // Text color
                },
              }}
              sx={{
                width: { md: "70%" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // Set border color to white
                    borderWidth: "2px", // Set border width to 2px
                  },
                  "&:hover fieldset": {
                    borderColor: "white", // Keep border white on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Keep border white when focused
                  },
                  "&.Mui-disabled fieldset": {
                    borderColor: "white", // Ensure white border when disabled
                    borderWidth: "1px", // Keep border width consistent
                  },
                },
              }}
              disabled
            />
            <InputFileUpload />
          </Box>

          <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Tokenisation"
            />
            <FormControlLabel control={<Checkbox />} label="Stemming" />
            <FormControlLabel control={<Checkbox />} label="Lemmatization" />
            <FormControlLabel control={<Checkbox />} label="Stopword Removal" />
            <FormControlLabel control={<Checkbox />} label=" HTML Tag Removal" />
          </FormGroup>
        </Box>

        <LoadingButton
          size="large"
          type="submit"
          color="inherit"
          variant="contained"
          sx={{
            width: "40%",
            borderRadius: 2,
            mb: 2,
            backgroundColor: "#1976d2",
            color: "white",
            marginY: "1em",
            fontWeight: 600,
          }}
        >
          Submit
        </LoadingButton>
      </Box>
    </>
  );
}

export default HomeComponent;