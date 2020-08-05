import React, {Component} from 'react';
import './App.css';

class Todo extends Component{

    constructor(props){
        super(props)
        this.state= {
            isContentUpdating: false,
            contentInput: this.props.content,
            isPriorityUpdating: false,
            priorityInput: this.props.priority
        }
    }

    handleContentDoubleClick = (e)=>{
        this.setState({
            isContentUpdating: true,
        })
    }
    handleContentInputBlur = (e)=>{
        var id = this.props.id
        var data = {
            content:this.state.contentInput
        }
        this.props.updateTodo(id,data)

        //exit updating mode
        this.setState({
            isContentUpdating: false,
        })
    }
    handleContentInputChange = (e)=>{
        this.setState({
            contentInput: e.target.value
        })
    }
    handleRemoveButtonClick = (e)=>{
        var id = this.props.id
        this.props.removeTodo(id)
    }

    handlePriorityDoubleClick = (e)=>{
        this.setState({
            isPriorityUpdating: true,
        })
    }
    handlePriorityInputBlur = (e)=>{
        var id = this.props.id
        var data = {
            priority:this.state.priorityInput
        }
        this.props.updateTodo(id,data)

        //exit updating mode
        this.setState({
            // isPriorityUpdating: false,
        })
    }
    handlePriorityInputChange = (e)=>{
        this.setState({
            priorityInput: e.target.value
        })
    }

    
    render(){
        return(
        <div className="wrap">
            <div className="note-wrap">             
                <div className="note note1" onDoubleClick={this.handleContentDoubleClick}>
                {
                    this.state.isContentUpdating==true ? (
                    <input type="text" className="updatecontent" value={this.state.contentInput} onBlur={this.handleContentInputBlur} onChange={this.handleContentInputChange}/>
                    ) : this.props.content
                }
                </div>
                <div class="priority" onDoubleClick={this.handlePriorityDoubleClick}> 
                {
                    this.state.isPriorityUpdating==true ? (
                    <input type="text" className="updatepriority" value={this.state.priorityInput} onBlur={this.handlePriorityInputBlur} onChange={this.handlePriorityInputChange}/>
                    ) : this.props.priority
                }
                <div className="checkbox" onClick={this.handleRemoveButtonClick}>-</div>
                </div>
            </div>
        </div>
        )
    }
}

export default Todo;