import Home from 'components/Pages/Home/Home';
import Movies from 'components/Pages/Movies/Movies';
import { Routes, Route } from 'react-router-dom';


export default function UserRoutes() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies /> } />
      </Routes>
    
  );
}
