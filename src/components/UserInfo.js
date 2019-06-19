import React from 'react';
import PropTypes from 'prop-types';

function UserInfo({ data }) {
  if (data.website && !/^https?:\/\//i.test(data.website)) {
    var url = 'http://' + data.website;
  }

  return (
    <div>
      <p>{data.name}</p>
      <p>{data.phone}</p>
      <p>{data.email}</p>
      <p>
        <a href={url} target="_blank" rel="noopener noreferrer">{data.website}</a>
      </p>
    </div>
  );
}

UserInfo.propTypes = {
  data: PropTypes.object,
};

export default UserInfo;
