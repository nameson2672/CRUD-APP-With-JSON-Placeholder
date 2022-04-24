import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import DeveloperInfoModel from './DeveloperInfoModel';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxwidth="lg">
        <Toolbar variant="dense"  sx={{display:'flex',justifyContent:"space-between"}} >
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            CRUD App
          </Typography>
        </Toolbar>
        </Container>
      </AppBar>
      <DeveloperInfoModel open={open} handleClose={handleClose}/>
    </Box>
  )
}
