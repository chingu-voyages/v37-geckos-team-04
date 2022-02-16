import { GlobalStyle } from './AppStyle';
import Navbar from './Components/01-Navbar/Navbar';
import Footer from './Components/02-Footer/Footer';
import LandingPage from './Components/03-LandingPage/LandingPage';

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <LandingPage />
      {/* <Footer /> */}
    </div>
  );
}
