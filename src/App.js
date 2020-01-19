import React, {Component} from 'react';

import './App.css';
import TodoList from './components/TodoList'
import Header from "./components/header";
import AddTodo from "./components/AddTodo";

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Learn React",
                completed: false
            }
        ]
    };


    // Toggle Complete
    markComplete = (id) => {
        this.setState({todos: this.state.todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo
            })})
    };

    delTodo = (id) => {
         this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    };

    addTodo = (title) => {
        let id = 1;
        if(this.state.todos.length>=1){
            id = this.state.todos[this.state.todos.length - 1].id + 1;
        }
        const todo = {
                id: id,
                title: title,
                completed:false
            };
            this.setState({todos: [...this.state.todos, todo]});

    };
    render() {
            return (
                <div className="App">
                    <div className='container'>
                    <Header/>
                    <AddTodo addTodo={this.addTodo}/>
                    <TodoList todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                    </div>
                </div>
            );
    }
}
export default App;
