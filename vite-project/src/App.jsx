import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MoviePage from './pages/MoviePage/MoviePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
  },
  {
    path:'/:movieId',
    element: <MoviePage/>,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
