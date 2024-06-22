import { Button, Chip, TextField } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from "react";

const LandingPage = () => {
  const [isDisabled, setDisabled] = useState(false);
  const query = `
    {
      users {
        data {
          id
          name
          email
        }
      }
    }
  `;
  
  const handleClick = async () => {
    setDisabled(true);
    try {
      await fetch('https://graphqlzero.almansi.me/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })
      .then(response => response.json())
        .then(data => console.log(data.data.users.data));
      setDisabled(false);
    } catch (error) {
      setDisabled(false);
      console.error('Error:', error);
    }
  }

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
          <Button id="free-trial" style={{ backgroundColor: '#6366F1'}} className="button" variant="contained" onClick={handleClick} disabled={isDisabled}>Start Free Trial</Button>
        </div>
        <p className="sub-text">
          Start your free 14-day trial, no credit card necessary.
          By providing your email, you agree to our <span style={{ color: 'white' }}>terms of service.</span>
        </p>
      </div>
      <div className="wrapper">
        <img className="illustration" src="./src/assets/Illustration.png" />
      </div>
    </div>
  ); 
}

export default LandingPage;