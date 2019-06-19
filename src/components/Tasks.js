import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from './TodoList'
import { getAllTasks } from '../redux/actionCreators';

class Tasks extends Component {
	componentDidMount() {
		this.props.getAllTasks();
	}

	render() {
		const { todos, userList } = this.props;
		return (
			<div className="container">
				<h2>Все задачи</h2>
				<TodoList data={todos} userList={userList} />
			</div>
		);
	}
}

export default connect(
	state => ({
		todos: state.todos.allTasks,
		userList: state.todos.userList,
	}),
	dispatch => ({
		getAllTasks: () => {
			dispatch(getAllTasks());
		}
	})
)(Tasks);
