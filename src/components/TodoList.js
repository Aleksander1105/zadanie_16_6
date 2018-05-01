import React from 'react';
import Todo from './Todo';
import style from './StyleTdL.css';

const TodoList = (props) => {
	return (
		<div className={style.StyleTdL}>
		{props.list.length === 0 ? (<h3>Nothing to be done</h3>) : (<ul><Todo list={props.list} remove={props.remove} /></ul>)}
		</div>
	)
}

export default TodoList;