import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        todos:[
          {
            id:1,
            content: 'Ring peter',
            priority:'Urgent'
          },
          {
            id:2,
            content: 'Ring paul',
            priority:'Urgent'
          },
          {
            id:3,
            content: 'Ring mary',
            priority:'Not urgent'
          },
        ]
      }
  }

  addTodo = (data)=>{
    var newTodo = {
      id: Date.now(),
      ...data
    }

    var newList = [newTodo, ...this.state.todos]
    this.setState({
      todos: newList
    })
  }

  removeTodo = (id)=>{
    var todos = this.state.todos

    var filtered = todos.filter((todo)=>{
      return todo.id != id
    })

    this.setState({
      todos: filtered
    })
  }

  updateTodo = (id, data)=>{
    var todos = this.state.todos
    var updated = todos.map((todo)=>{
      return (todo.id == id) ? {...todo,...data} : todo
    })
    this.setState({
      todos:updated
    })
  } 

  render(){
  return (
    <div className="App">
      <header>
        <div className="checklist">Things To Do</div>
        <div className="date">The Reactive Note List<br/>
        JAY FROST</div>
      </header>
      <main>
        <div className="notes">
            {
                this.state.todos.map((todo)=>{
                    var todoProps = {
                        key:todo.id,
                        removeTodo:this.removeTodo,
                        updateTodo:this.updateTodo,
                        ...todo,
                    }
               
                    return (
                        <Todo {...todoProps}/>
                    )
                })
            }
        </div>
      </main>
    <NewTodoForm addTodo={this.addTodo}/>
    </div>
  )
}
}

export default App;
