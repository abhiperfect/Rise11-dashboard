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
            bgcolor: '#7d2c2c',
            height: '100vh',
            width: '100%',
            display: 'flex',
          }}
        >
          <LeftContainer open={openSidebar} toggleDrawer={toggleDrawer} />
          <Box sx={{ flexGrow: 1 }}>
            <RightContainer toggleDrawer={toggleDrawer} />
            <Box
              sx={{
                bgcolor: '#fff',
                height: 'calc(100vh - 64px)', // Adjust height below the header
                padding: 2,
              }}
            >
              {/* Add your other content here */}
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
