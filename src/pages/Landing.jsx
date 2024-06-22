import { Button, Chip, TextField } from "@mui/material";
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
        <h1>
          A better way 
          <div>
            to ship web apps
          </div>
        </h1>
        <p>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </p>
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
          <Button id="free-trial" style={{ backgroundColor: '#6366F1'}} className="button" variant="contained">Start Free Trial</Button>
        </div>
        <p className="sub-text">
          Start your free 14-day trial, no credit card necessary.
          By providing your email, you agree to our terms of service.
        </p>
      </div>
      <div className="wrapper">
        <img className="illustration" src="./src/assets/Illustration.png" />
      </div>
    </div>
  ); 
}

export default LandingPage;