import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './Todo.css';


// initial state
const todos = [{
  task: "Make Coffee",
  id: 123,
  completed: false
}]
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todos,
    }
  }
  toggleItem = id => {
    console.log(this.state.todoList)
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    this.setState({
      todoList: newTodoList
    })
  }

  addItem = itemTask => {
    const newItem = {
      task: itemTask,
      id: Date.now(),
      completed: false

    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    })
  };
  deleteItem =() => {
    this.setState({
      
      todoList: this.state.todoList.filter(element => {
        return element.completed === false
      })
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
        todos={this.state.todoList}
        toggleItem={this.toggleItem} 
        deleteItem={this.deleteItem}
        />

      </div>
    );
  }
}

export default App;
