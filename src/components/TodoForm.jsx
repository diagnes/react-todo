import React, { Component } from 'react';
import { func } from 'prop-types';
import { Form } from 'semantic-ui-react'
import * as moment from 'moment';

export default class TodoForm extends Component {
  state = {
    todo: this.getPrefixTodo(),
  }

  static propTypes = {
    onAddTodo: func.isRequired,
  }
 
  static defaultProps = {
    onAddTodo: () => {}
  }

  handleChange = (evt) => {
    this.setState({ todo: evt.target.value });
  }

  handleSubmit = () => {
    this.props.onAddTodo(this.state.todo);
    this.setState({ todo: '' });
    setTimeout(() => {
      this.setState({ todo: this.getPrefixTodo() });
    }, 2000);
  }

  getPrefixTodo() {
    // return moment().format('MM/DD - ');
    return moment().format('HH:mm:ss - ');
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <input
            name="todo"
            placeholder="Task..."
            onChange={this.handleChange}
            value={this.state.todo}
          />
        </Form.Field>
      </Form>
    );
  }
}
