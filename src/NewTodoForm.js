import React, {Component} from 'react';
import './App.css';

class NewTodoForm extends Component{

constructor(props){
    super(props)

    this.state = {
        contentInput:'',
        priorityInput:''
    }
}

handleContentInputChange = (e)=>{
    this.setState({
        contentInput: e.target.value
    })
}

handlePriorityInputChange = (e)=>{
    this.setState({
        priorityInput: e.target.value
    })
}

handleAddButtonClick = (e)=>{
    e.preventDefault()
    var data = {
        content: this.state.contentInput,
        priority: this.state.priorityInput
    }
    this.props.addTodo(data)
    this.setState({
        contentInput:'',
        priorityInput:''
    })
}

render(){
    return(
    <footer>
        <h1>New Todo</h1>
        <form>
            <input type="text" id="newtodo" placeholder="Enter note here" value={this.state.contentInput} onChange={this.handleContentInputChange}/><br/>
            <input type="text" id="newtodo" placeholder="Enter your priority" value={this.state.priorityInput} onChange={this.handlePriorityInputChange}/><br/>
            <button type="text" id="button" onClick={this.handleAddButtonClick}>+</button>
        </form>
    </footer>
    )
}
}

export default NewTodoForm;