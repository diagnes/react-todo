import React from 'react';
import { boolean, number, func, shape, string } from 'prop-types';
import { Button, Checkbox, Icon, List } from 'semantic-ui-react'
// Other options instead of semantic react
// https://hackernoon.com/the-coolest-react-ui-frameworks-for-your-new-react-app-ad699fffd651

TodoItem.propTypes = {
  todo: shape({
    id: number.isRequired,
    text: string.isRequired,
    done: boolean,
  }),
  onRemove: func.isRequired,
  onDone: func.isRequired,
};

function TodoItem({todo, onRemove, onDone}) {
  const className = todo.done ? 'todo done' : '';
  return (
    <List.Item>
      <List.Content
        floated="left"
        verticalAlign="middle"
      >
        <Checkbox
          onChange={() => { onDone(todo.id, !todo.done) }}
          checked={todo.done}
        />
      </List.Content>
      <List.Content
        floated="right"
        verticalAlign="middle"
      >
        <Button
          icon
          basic
          circular
          color="red"
          size="mini"
          onClick={() => {onRemove(todo.id)}}
        >
          <Icon name="trash outline"/>
        </Button>
      </List.Content>
      <List.Content
        verticalAlign="middle"
        className={className}
      >
        {todo.text}
      </List.Content>
    </List.Item>
  );
}

export default TodoItem;
