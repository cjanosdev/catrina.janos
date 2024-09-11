import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { HelmetProvider } from 'react-helmet-async';
import theme from './src/theme'; // Import your custom theme
import Layout from './src/components/Layout';

// Create an Emotion cache instance
const cache = createCache({ key: 'css' });

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
    <HelmetProvider>
        <Layout>{element}</Layout>
      </HelmetProvider>
    </ThemeProvider>
  </CacheProvider>
);
