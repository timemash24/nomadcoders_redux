import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../routes/store';

function ToDo({ text, onBtnClick }) {
  return (
    <li>
      {text}
      <button onClick={onBtnClick}>❌</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
