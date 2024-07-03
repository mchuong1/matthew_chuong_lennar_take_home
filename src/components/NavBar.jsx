import { useState } from "react";
import { Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navItems = [
    { name: 'Product' },
    { name: 'Features' },
    { name: 'Marketplace' },
    { name: 'Company' },
  ]

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
        {navItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemButton>{item.name}</ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <Button className="menu-button" variant="contained" color="primary">Start Free Trial</Button>
        </ListItem>
        <ListItem style={{ justifyContent: 'center' }}>
          Existing customer?
          <Button color="secondary" >Login</Button>
        </ListItem>
      </List>
    </Box>
  );
  const NavMenu = () => (
    // change inline-style to class name
    <div style={{ display: 'flex', color: 'white', alignItems: 'center' }}>
      <img className="logo" src="./src/assets/Logo.png" />
      <List style={{ display: "flex" }}>
        {navItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemButton>{item.name}</ListItemButton>
          </ListItem>
        ))}
      </List>
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
        color="secondary"
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