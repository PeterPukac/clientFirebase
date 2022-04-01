import AddAcount from './AddAcount';
import './App.css';
import { Routes, Route} from "react-router-dom";
import DataLoader from './DataLoader';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/list/:group" element={<DataLoader/>} />
        <Route path="/" element={<Main/>} />
        <Route path="addAccount" element={<AddAcount/>} />
      </Routes>
      <Footer/>

    </div >
  );
}

export default App;
