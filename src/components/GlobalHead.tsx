import React from 'react';
import { Helmet } from 'react-helmet-async';

const GlobalHead = () => (
  <Helmet>
    <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
    {/* You can add other global meta tags or link tags here */}
    <title>Catrina Janos</title>
  </Helmet>
);

export default GlobalHead;
