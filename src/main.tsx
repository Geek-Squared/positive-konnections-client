import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Method from './components/Method.tsx';
import Support from './components/Support.tsx';
import Comic from './components/Comic.tsx';
import Contact from './components/Contact.tsx';
import App from './App.tsx';
import Blog from './components/Blog.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/method",
    element: <Method />
  },
  {
    path: "/support",
    element: <Support />
  },
  {
    path: "/comic",
    element: <Comic />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/blog",
    element: <Blog />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
   <RouterProvider router={router} />
   </App>
  </React.StrictMode>,
)
