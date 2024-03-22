import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// COMPONENTS
import SideBar from './components/SideBar.jsx';

// PAGES
import Home from './pages/Home.jsx';
import Planning from './pages/Planning.jsx';
import Game from './pages/Game.jsx';
import Tempe from './pages/Tempe.jsx';
import Dance from './pages/Dance.jsx';
import Religion from './pages/Religion.jsx';
import Art from './pages/Art.jsx';
import Cny from './pages/Cny.jsx';
import App from './App.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404</div>,
  },
  {
    path: '/planning',
    element: <Planning />,
    errorElement: <div>404</div>,
  },
  {
    path: '/game',
    element: <Game />,
    errorElement: <div>404</div>,
  },
  {
    path: '/tempe',
    element: <Tempe />,
    errorElement: <div>404</div>,
  },
  {
    path: '/dance',
    element: <Dance />,
    errorElement: <div>404</div>,
  },
  {
    path: '/religion',
    element: <Religion />,
    errorElement: <div>404</div>,
  },
  {
    path: '/art',
    element: <Art />,
    errorElement: <div>404</div>,
  },
  {
    path: '/cny',
    element: <Cny />,
    errorElement: <div>404</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex'>
        <SideBar></SideBar>
        <div className='content-container'>
          <RouterProvider router={router} />
        </div>
        <App></App>
    </div>
  </React.StrictMode>,
)
