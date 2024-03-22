import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
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

import './index.css';

const router = createBrowserRouter([
  {
    path: '/integratedproject/',
    element: <Home />,
  },
  {
    path: '/integratedproject/planning',
    element: <Planning />,
  },
  {
    path: '/integratedproject/game',
    element: <Game />,
  },
  {
    path: '/integratedproject/tempe',
    element: <Tempe />,
  },
  {
    path: '/integratedproject/dance',
    element: <Dance />,
  },
  {
    path: '/integratedproject/religion',
    element: <Religion />,
  },
  {
    path: '/integratedproject/art',
    element: <Art />,
  },
  {
    path: '/integratedproject/cny',
    element: <Cny />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex'>
        <SideBar></SideBar>
        <div className='content-container'>
          <RouterProvider router={router}></RouterProvider>
        </div>
    </div>
  </React.StrictMode>,
)
