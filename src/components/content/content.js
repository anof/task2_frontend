import React from 'react';
import Lower from './lower/lower'
import Artists from './upper/artists'

export default function Layout() {
  return (
    <div id="content">
        <Artists />
        <Lower />
    </div>
    
  );
}