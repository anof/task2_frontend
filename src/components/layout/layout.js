import React from 'react';
import Header from '../header/header'
import Content from '../content/content'
import Footer from '../footer/footer'

export default function Layout() {
  return (
    <div id="layout">
    <Header />
    <Content/>
    
    <Footer />
    </div>
    
  );
}