import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import PokemonList from './pages/pokemon/pokemonList';
import PokemonDetail from './pages/pokemon/pokemon';

const router = createBrowserRouter([
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/',
    Component: Dashboard,
    children: [
      {
        path: '/pokemon',
        Component: PokemonList,
      },
      {
        path: '/pokemon/:id',
        Component: PokemonDetail,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
