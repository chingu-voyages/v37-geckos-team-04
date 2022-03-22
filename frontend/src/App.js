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
import History from './Components/09-History/History';
import NotFoundPage from './Components/NotFound404';
import GraphContainer from './Components/08-Graphs/GraphContainer';
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
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="graphs" element={<GraphContainer />} />
          <Route path="history" element={<History />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
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
