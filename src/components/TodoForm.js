import React from 'react';

const TodoForm = (props) => {
	return(
		<form onSubmit={(e) => props.add(e)}>
			<label>Add smth to do: </label>
			<input type="text" onChange={(e) => props.handle(e)} value={props.submittedText} />
			<button type="submit">Add task</button>
		</form>
	);
}

export default TodoForm;