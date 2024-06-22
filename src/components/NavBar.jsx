import { useEffect, useState } from "react";
import { Box, Button, Drawer, IconButton, List, ListItem, ListItemButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const mobileSize = 820;
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < mobileSize);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileSize);
    };
    window.addEventListener('resize', handleResize);
    // Clean up function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const DrawerList = (
    <Box sx={{ width: 'auto' }} role="presentation">
      <List>
        <ListItem>
          <div className="nav-container">
            <div>
              <img className="logo" src="./src/assets/Logo.png" />
            </div>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon onClick={toggleDrawer(false)} />
            </IconButton>
          </div>
        </ListItem>
        <ListItem>
          <ListItemButton>Product</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>Features</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>Marketplace</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>Company</ListItemButton>
        </ListItem>
        <ListItem>
          <Button className="menu-button" variant="contained" style={{ backgroundColor: '#6366F1'}}>Start Free Trial</Button>
        </ListItem>
        <ListItem style={{ justifyContent: 'center' }}>
          Existing customer?
          <Button>Login</Button>
        </ListItem>
      </List>
    </Box>
  );
  const NavMenu = () => (
    <div style={{ display: 'flex', color: 'white', columnGap: '10px', alignItems: 'center' }}>
      <img className="logo" src="./src/assets/Logo.png" />
      <h2>Product</h2>
      <h2>Features</h2>
      <h2>Marketplace</h2>
      <h2>Company</h2>
    </div>
  );

  const NavButton = () => (
    <div>
      <Button
        style={{ color: "white" }}
      >
        Log in
      </Button>
      <Button
        className="background-gray"
        variant="contained"
        style={{
          backgroundColor: "#4B5563"
        }}
      >
        Start Free Trial
      </Button>
    </div>
  );

  return (
    <div className="nav-root">
      <div className="nav-container">
        {isMobile
          ? <img className="logo" src="./src/assets/Logo.png" />
          : (<div>
              <NavMenu />
            </div>)
        }
        {
          isMobile ? (
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon className="menu-icon"/>
              </IconButton>
            ) : (<NavButton />)
        }
      </div>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor={'top'}
        sx={{
          "& .MuiPaper-root": {
            width: 'auto',
            margin: '10px',
            padding: '10px',
            borderRadius: '10px',
          }
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default NavBar;