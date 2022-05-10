import './App.css';
import {Routes, Route} from "react-router-dom";

// importing components
import RegisterAndLogin from './components/registerAndLogin/RegisterAndLogin';


// const backend_uri = "https://ritz-ecommerce-backend.herokuapp.com/";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={< RegisterAndLogin />} />
      </Routes>
    </div>
  );
}

export default App;
