import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from '../components/rightContainer/Header';
import MainContainer from '../components/rightContainer/MainContainer';

export default function RightContainer({toggleDrawer}) {
  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth={false} disableGutters sx={{
        display:'flex',
         flexDirection:'column', 
      }}>
      <Header toggleDrawer={toggleDrawer}/>
        <MainContainer />
      </Container>
    </React.Fragment>
  );
}
