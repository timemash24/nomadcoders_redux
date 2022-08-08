import React from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { actionCreators } from './store';

function Detail({ toDos, onClick }) {
  const id = parseInt(useParams().id);
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
  const navigate = useNavigate();

  const handleDel = () => {
    onClick(id);
    navigate('/');
  };
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
      <button onClick={handleDel}>❌</button>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return { onClick: (id) => dispatch(actionCreators.deleteToDo(id)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
