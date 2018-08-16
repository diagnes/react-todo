import React from 'react';
import { Container, Segment } from 'semantic-ui-react'

import AppHeader from './components/AppHeader';
import AppTodo from './components/AppTodo';

function App() {
  return (
    <div className="full height">
      <Segment attached="top">
        <AppHeader />
      </Segment>
      <Segment attached className="full height">
        <Container text>
          <AppTodo/>
        </Container>
      </Segment>
    </div>
  );
}

export default App;
