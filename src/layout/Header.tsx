import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Badge } from '@mui/material';
const YourSVGFile = 'src/assets/usflogo.svg';


const pages = ['MyUSF', 'OASIS', 'Week at a Glance', 'Registered Classes'];

export default function Header() {

  return (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <img src={YourSVGFile} alt="Your Logo" style={{ height: '30px', width: '30px', marginRight: '10px' }} />

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
                    {pages.map((page) => (
                    <Button
                        key={page}
                        sx={{ my: 2, color: 'secondary.main', display: 'block' }}
                    >
                        {page}
                    </Button>
                    ))}
                </Box>
                
                <Badge badgeContent={4} color='secondary' fullWidth>
                    <Button variant="outlined" color="secondary">
                        Selected Classes
                    </Button>
                </Badge>

            </Toolbar>
        </Container>
    </AppBar>
  );
}
