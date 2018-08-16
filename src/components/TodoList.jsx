import React from 'react';
import { array, func } from 'prop-types';
import { List } from 'semantic-ui-react'

import TodoItem from './TodoItem';

TodoList.propTypes = {
  todos: array.isRequired,
  onRemove: func.isRequired,
  onDone: func.isRequired,
};

function renderTodos(todos, onRemove, onDone) {
  return todos.map(todo => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onRemove={onRemove}
      onDone={onDone}
    />
  ));
}

function TodoList({ todos = [], onRemove, onDone }) {
  // Explanation default values http://es6-features.org/#DefaultParameterValues
  return (
    <List verticalAlign='middle'>
      {renderTodos(todos, onRemove, onDone)}
    </List>
  );
}

export default TodoList;
