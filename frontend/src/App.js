import { GlobalStyle } from './AppStyle';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/04-LandingPage/LandingPage';
import LogInPage from './Components/05-LoginSignUpPage/LogInPage';
import SignUpPage from './Components/05-LoginSignUpPage/SignUpPage';

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
      </Routes>
      {/* <LandingPage />
      <LogInPage />
      <SignUpPage /> */}
    </div>
  );
}
