import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import CreatePost from './Pages/CreatePost';
import SignUp from './Pages/SignUp';
function App() {

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/posts' element={<CreatePost/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
