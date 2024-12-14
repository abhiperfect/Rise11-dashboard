import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Claim from './MainContainerPages/Claim';
export default function MainContainerPages() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          bgcolor: '#f4f5fc',
          borderTopLeftRadius: '10px',
          boxShadow: 'none',
          padding: 3,
          height: '100%', // Adjust to parent container
          width: '100%', // Full width of the parent container
          overflow: 'auto', // Prevent overflow with scroll if needed,
          pt:0,
        }}
      >
        <Claim />
      </Container>
    </React.Fragment>
  );
}
