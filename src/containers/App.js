import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	addTodo(val) {
		const todo = {
			text: val,
			id: uuid.v4(),
		};
		// like push but does not modify the state
		const data = [...this.state.data, todo];
		this.setState({data});
	}


	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: remainder});
	}

	render() {
		return (
			<div className={style.TodoApp}>
				<Title data={this.state.data}/>
				<TodoList list={this.state.data} />
			</div>
		);
	}
}

export default App;