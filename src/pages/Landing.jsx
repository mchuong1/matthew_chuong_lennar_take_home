import { Button, Chip, TextField, Typography } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const LandingPage = () => {
  return (
    <div className="landing-root">
      <div className="main-content">
        <div className="pill-bar">
          <Chip
            label="WE'RE HIRING"
            sx={{
              "& .MuiChip-label": {
                color: "white",
                backgroundColor: "#6366F1",
                borderRadius: "50px",
                padding: "2px 12px",
              },
            }}
          />
          <Chip
            label="Visit our careers page"
            sx={{
              "& .MuiChip-label": {
                color: "white",
              },
            }}
          />
          <ChevronRightIcon className="right-arrow"/>
        </div>
        <Typography variant="h1">
          A better way to
          <div>
            ship web apps
          </div>
        </Typography>
        <Typography variant="subtitle1">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </Typography>
        <div className="field-container">
          <TextField
            className="email"
            label="Enter your Email"
            variant="outlined"
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: "white",
                
              }
            }}
            />
          <Button id="free-trial" color="primary" className="button" variant="contained">Start Free Trial</Button>
        </div>
        <Typography variant="subtitle2">
          Start your free 14-day trial, no credit card necessary.
          By providing your email, you agree to our <span style={{ color: 'white' }}>terms of service.</span>
        </Typography>
      </div>
      <div className="wrapper">
        <img className="illustration" src="./src/assets/Illustration.png" />
      </div>
    </div>
  ); 
}

export default LandingPage;