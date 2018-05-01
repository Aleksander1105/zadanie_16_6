import React from 'react';

const Todo = (props) => props.list.map(({id, text}) => <li key={id} onClick={() => props.remove(id)}>{text}</li>);

export default Todo;