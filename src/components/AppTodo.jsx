import React, { Component } from 'react';

import TodoTitle from './TodoTitle';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
// Explanation of import https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

export default class AppTodo extends Component {
// Explanation of export https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
  state = {
    todos: [],
    color: 'black',
  }

  colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];

  handleAddTodo = (text) => {
    // Explanation of arrow funcitons and how to keep component context
    // https://github.com/lukehoban/es6features#arrows
    const id = (new Date()).getTime();
    const done = false;
    const todo = { id, text, done };
    // Explanation short hands http://es6-features.org/#PropertyShorthand

    const todos = [...this.state.todos, todo];
    // Explanation spread operator http://es6-features.org/#SpreadOperator

    this.setState({ todos });
  }

  handleRemoveTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    // Explanation new array methods http://es6-features.org/#ArrayElementFinding

    this.setState({ todos });
  }

  handleDone = (id, done) => {
    const { todos } = this.state;
    const todoKey = todos.findIndex(todo => todo.id === id);
    const todo = Object.assign({}, todos[todoKey], { done });
    // Explanation assign http://es6-features.org/#ObjectPropertyAssignment

    todos[todoKey] = todo;
    this.setState({ todos: [...todos] })
  }

  handleColorChange = () => {
    const index = this.colors.findIndex(color => this.state.color === color);
    const newColor = this.colors[(index + 1) % this.colors.length];
    this.setState({ color: newColor });
  }

  render() {
    const { todos, color } = this.state;
    // Explanation destructuring http://es6-features.org/#ObjectMatchingShorthandNotation

    const count = todos.length;
    return (
      <div>
        <TodoTitle
          count={count}
          color={color}
          onColorChange={this.handleColorChange}
        />
        <TodoForm onAddTodo={this.handleAddTodo} />
        <TodoList
          todos={todos}
          onRemove={this.handleRemoveTodo}
          onDone={this.handleDone}
        />
      </div>
    );
  }
}
