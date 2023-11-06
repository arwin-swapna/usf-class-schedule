import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
const YourSVGFile = 'src/assets/usflogo.svg';

export default function Header() {

  return (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <img src={YourSVGFile} alt="USF Logo" style={{ height: '30px', width: '30px', marginRight: '10px' }} />

                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                USF
                </Typography>

                <Box sx={{ flexGrow: 1, display: 'flex' }}>
                    <Button variant="navbar" onClick={() => window.open("https://my.usf.edu/myusf/home_myusf/index")}>MyUSF</Button>
                    <Button variant="navbar" onClick={() => window.open("https://bannersso.usf.edu/ssomanager/c/SSB")}>OASIS</Button>
                </Box>                
            </Toolbar>
        </Container>
    </AppBar>
  );
}
