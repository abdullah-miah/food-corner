import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blogs/Blog';
import Dashboard from './Components/Dashboard/Dashboard';
import Erorr from './Components/Erorr/Erorr';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Review from './Components/Reviews/Review';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Erorr></Erorr>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
