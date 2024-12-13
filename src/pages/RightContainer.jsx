import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from '../components/rightContainer/Header';
export default function RightContainer({toggleDrawer}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header toggleDrawer={toggleDrawer}/>
    </React.Fragment>
  );
}
