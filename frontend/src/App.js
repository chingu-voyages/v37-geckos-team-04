import { GlobalStyle } from './AppStyle';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import LandingPage from './Components/04-LandingPage/LandingPage';
import LogInPage from './Components/05-LoginSignUpPage/LogInPage';
import SignUpPage from './Components/05-LoginSignUpPage/SignUpPage';
import Dashboard from './Components/06-Dashboard/Dashboard';
import Modal from './Components/07-Modal/Modal';
import "antd/dist/antd.css";

export default function App() {
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
  // const auth = useAuth();
  const auth =  true;
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

function useAuth() {
  // For now
  return true;
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </div>
  );
}