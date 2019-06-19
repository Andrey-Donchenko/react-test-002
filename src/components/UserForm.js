import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        phone: '',
        email: '',
        website: '',
      }
    }
  }

  componentDidMount() {
    this.setState({
			formData: {
				name: this.props.data.name,
				phone: this.props.data.phone,
				email: this.props.data.email,
				website: this.props.data.website,
			}
		})
  }

  componentWillReceiveProps(nextProps) {
		if (nextProps.data !== this.props.data) {
			this.setState({
				formData: {
					name: nextProps.data.name,
					phone: nextProps.data.phone,
					email: nextProps.data.email,
					website: nextProps.data.website,
				}
			})
		}
  }

  editValue = e => {
		this.setState({
			formData: {
				...this.state.formData,
				[e.target.id]: e.target.value
			}
		})
	}

  sendForm = e => {
    e.preventDefault();
    if (this.props.notActive) {
      return;
    }
		this.props.handleForm(this.state.formData);
  }

  render() {
    const { formData } = this.state;
    const { notActive } = this.props;

    return (
      <form onSubmit={this.sendForm}>
        <div className="form-group">
          <label htmlFor="name">Имя</label>
          <input type="text" className="form-control" id="name" disabled={notActive} value={formData.name || ''} onChange={this.editValue} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Телефон</label>
          <input type="text" className="form-control" id="phone" disabled={notActive} value={formData.phone || ''} onChange={this.editValue} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" disabled={notActive} value={formData.email || ''} onChange={this.editValue} />
        </div>
        <div className="form-group">
          <label htmlFor="website">Сайт</label>
          <input type="text" className="form-control" id="website" disabled={notActive} value={formData.website || ''} onChange={this.editValue} />
        </div>
        <button type="submit" className="btn btn-primary">Сохранить</button>
      </form>
    );
  }
}

UserForm.propTypes = {
  formData: PropTypes.object,
  notActive: PropTypes.bool,
};

export default UserForm;
