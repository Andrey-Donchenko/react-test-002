import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserInfo from './UserInfo'
import UserForm from './UserForm'
import TodoList from './TodoList'
import { getUserTasks } from '../redux/actionCreators';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: props.user,
			isStatic: true
		}
	}

	componentDidMount() {
		this.props.getUserTasks(1);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.user !== this.props.user) {
			this.setState({
				user: nextProps.user,
			})
		}
	}

	activateForm = () => {
		this.setState({
			isStatic: false
		})
	}

	handleForm = data => {
		this.setState({
			user: {
				...this.state.user,
				...data
			},
			isStatic: true
		});
	}

	render() {
		const { user, isStatic } = this.state;
		const { todos } = this.props;
		const userList = {
			[user.id]: user.name
		};

		return (
			<div className="container" >
				<h2>Задачи {user.name}</h2>
				<div className="row">
					<div className="col-md-4">
						<UserInfo data={user} />
						<p>
							<button type="button" className="btn btn-primary" onClick={this.activateForm}>Редактировать</button>
						</p>
						<UserForm notActive={isStatic} data={user} handleForm={this.handleForm} />
					</div>
					<div className="col-md-8">
						<TodoList data={todos} userList={userList} />
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		todos: state.todos.userTasks,
		user: state.user.data,
	}),
	dispatch => ({
		getUserTasks: userId => {
			dispatch(getUserTasks(userId));
		}
	})
)(Profile);
