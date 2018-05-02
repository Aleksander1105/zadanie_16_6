import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { hot } from 'react-hot-loader';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			task: '',
			data: [{
				id: 1, 
				text: 'clean room'
			},
			{
				id: 2,
				text: 'wash the dishes'
			},
			{
				id: 3,
				text: 'feed my cat'
			}]
		};
	}
	addTodo(e) {
		(e).preventDefault(); //po co to?
		if (!this.state.task) {return;}
		const todo = {
			id: uuid.v4(),
			text: this.state.task
		};
		// like push but does not modify the state
		const data = [...this.state.data, todo];
		this.setState({
			data,
			task: ''
		});
	}


	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: remainder});
	}

	removeLastDo() {
		console.log(this.state.data);
		const removeLast = this.state.data.filter((todo, index) => index !== this.state.data.length -1);
		this.setState({data: removeLast});
	}


	handleChange(e) {
		this.setState ({
			task: e.target.value
		});
	}

	render() {
		return (
			<div className={style.TodoApp}>
				<Title data={this.state.data} />
				<TodoForm add={(event) => this.addTodo(event)} handle={(event) => this.handleChange(event)} submittedText={this.state.task} />
				<TodoList list={this.state.data} remove={(id) => this.removeTodo(id)} />
				<button onClick={this.removeLastDo}>Remove</button>
			</div>
		);
	}
}

export default hot(module)(App);