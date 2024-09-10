// gatsby-browser.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './src/theme'; // Import your custom theme
import Layout from './src/components/Layout';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Layout>{element}</Layout>
  </ThemeProvider>
);
