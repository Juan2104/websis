import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-scroll';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';

const Navbar = () => {
  return (
    <AppBar position="fixed" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)' }}>
      <Toolbar sx={{ color: '#fff'}}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          S.I
        </Typography>
        <Box>
          <Button
            component={Link}
            to="home"
            smooth={true}
            duration={500}
            color="inherit"
          >
            <HomeIcon/>
          </Button>
          <Button
            component={Link}
            to="portfolio"
            smooth={true}
            duration={500}
            color="inherit"
          >
            <AutoAwesomeMosaicIcon/>
          </Button>
          <Button
            component={Link}
            to="contact"
            smooth={true}
            duration={500}
            color="inherit"
          >
            <ContactsIcon/>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
