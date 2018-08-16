import React from 'react';
import { Header, Image } from 'semantic-ui-react'

function AppHeader() {
  return (
    <Header textAlign="center" color="blue" size="huge" >
      <Image shape='circular' src="/logo.svg" alt="logo" />
      <Header.Content>
        Welcome to React
      </Header.Content>
    </Header>
  );
}

export default AppHeader;
