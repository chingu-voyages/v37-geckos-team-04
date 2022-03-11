import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutSuccess } from '../../reducers/userSlice';

export default function Dashboard() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const logOutUser = () => {
    dispatch(logOutSuccess());
    navigate('/');
  };

  return (
    <div>
      <div>You're on the dashboard!</div>
      <button onClick={logOutUser}>Log out (placeholder)</button>
    </div>
  );
}
