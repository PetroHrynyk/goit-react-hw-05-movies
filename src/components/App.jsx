import { Layout } from 'components/Layout/Layout';
import { Navigate, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
// import MovieDetails from 'pages/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

export const App = () => {
    return (
        <>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          {/* <Route path="home/:id" element={<MovieDetails />}> */}
            {/* <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}

          {/* <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
        </Route> 
        </Routes>
        </>
    );
}