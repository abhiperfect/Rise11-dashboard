import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

export default function Dashboard() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleDrawer = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: '100vw',
        }}
      >
        <Box
          sx={{
            bgcolor: '#ffffff',
            height: '100vh',
            width: '100%',
            display: 'flex',
            boxShadow:'none'
          }}
        >
          <LeftContainer open={openSidebar} toggleDrawer={toggleDrawer} />
          <Box sx={{ flexGrow: 1 }}>
            <RightContainer toggleDrawer={toggleDrawer} />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
