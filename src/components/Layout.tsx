import React from 'react';
import { Container, CssBaseline, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'gatsby';
import { useTheme } from '@mui/material/styles';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const theme = useTheme(); // Hook to access the theme
  return (
    <div className="layout-container">
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Catrina Janos
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          {/* <Button color="inherit" component={Link} to="/cv">CV</Button> */}
          {/* Add more navigation buttons as needed */}
        </Toolbar>
      </AppBar>
      <Container sx={{ padding: '20px' }}>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
