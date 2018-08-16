import React from 'react';
import { func, number, string } from 'prop-types';
import { Button, Header, Icon } from 'semantic-ui-react'

TodoTitle.propTypes = {
  count: number.isRequired,
  color: string,
  onColorChange: func,
};

// Explanation default values http://es6-features.org/#DefaultParameterValues
function TodoTitle({ count = 0, color = 'black', onColorChange = () => {} }) {
  return (
    <Header as="h2" color={color}>
      <Icon name="list" />
      <Header.Content>
        Todo List ({ count })
        <Button circular icon="refresh" onClick={onColorChange} />
      </Header.Content>
    </Header>
  );
}

export default TodoTitle;
