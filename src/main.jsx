import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// COMPONENTS
import SideBar from './components/SideBar.jsx';

// PAGES
import Home from './pages/Home.jsx';
import Planning from './pages/Planning.jsx';
import Game from './pages/Game.jsx';
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex scrollbar-thumb-gray-500 scrollbar-track-gray-200'>
        <div className="h-64 bg-slate-400"></div>
        <SideBar></SideBar>
        <div className='content-container scrollbar-thin h-screen overflow-y-scroll'>
          <div className="bg-slate-400"></div>
          <RouterProvider router={router} />
        </div>
    </div>
  </React.StrictMode>,
)
