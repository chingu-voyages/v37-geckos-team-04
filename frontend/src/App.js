import React, { useEffect } from 'react';

import { GlobalStyle } from './style';
import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logInAsync } from './reducers/User';
import { fetchCurrentUser } from './reducers/userSlice';

import LandingPage from './Components/04-LandingPage/LandingPage';
import LogInPage from './Components/05-LoginSignUpPage/LogInPage';
import SignUpPage from './Components/05-LoginSignUpPage/SignUpPage';
import Dashboard from './Components/06-Dashboard/Dashboard';
import Modal from './Components/07-Modal/Modal';
import 'antd/dist/antd.min.css';

export default function App() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const profile = localStorage.profile ? localStorage.profile : null;

  useEffect(() => {
    if (profile) {
      dispatch(fetchCurrentUser(profile));
      navigate('/dashboard');
    }
  }, [profile, navigate]);

  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/modal" element={<Modal />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

function PrivateRoute() {
  const authenticated = useSelector((state) => {
    return state.user.authData;
  });
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
}
