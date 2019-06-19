import React from 'react';
import PropTypes from 'prop-types';

function TodoList({ data, userList }) {

  return (
    <ul className="list-group">
      {
        data && data.map(el => (
          <li key={el.id} className="list-group-item d-flex justify-content-between align-items-center">
            <h5 className="mb-1">
              {
                el.completed ?
                  <s>{el.title}</s>
                  :
                  <span>{el.title}</span>
              }
            </h5>
            <small>{userList[el.userId]}</small>
          </li>
        ))
      }
    </ul>
  );
}

TodoList.propTypes = {
  data: PropTypes.array,
  userList: PropTypes.object
};

export default TodoList;
