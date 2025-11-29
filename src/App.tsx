import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
// import PokemonList from './pages/pokemon/pokemonList';
// import PokemonDetail from './pages/pokemon/pokemon';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Todo from './pages/todo';

import { Provider as ReduxProvider } from 'react-redux';
import store from './store/store';
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';

const router = createBrowserRouter([
  {
    path: '/signin',
    Component: Signin,
  },
  {
    path: '/signup',
    Component: Signup,
  },
  {
    path: '/',
    Component: Dashboard,
    children: [
      {
        path: '/todo',
        Component: Todo,
      },
      // {
      //   path: '/pokemon',
      //   Component: PokemonList,
      // },
      // {
      //   path: '/pokemon/:id',
      //   Component: PokemonDetail,
      // },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default App;
