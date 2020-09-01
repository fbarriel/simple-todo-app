import React from "react"

import TodoItem from "./TodosItem";

class TodosList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={this.props.handleChangeProps}
          deleteTodoProps={this.props.deleteTodoProps}
        />
        ))}
      </div>
    )
  }

  handleChange = () => {
    console.log("clicked");
  };
}

export default TodosList