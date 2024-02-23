
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="App">
  <Header/>
  <Main/>
  <Footer/>
    </div>
  );
}

export default App;
