import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/Home/Home.jsx';
import Root from './rootfile/Root.jsx';
import Timeline from './timeline/Timeline.jsx';
import States from './states/States.jsx';
import FriendDetail from './components/friend/FriendDetail.jsx';
import NotFound from './components/notfound/NotFound.jsx';
import { AppProvider } from './context/AppContext';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "timeline", element: <Timeline /> },
      { path: "states", element: <States /> },
      { path: "friend/:id", element: <FriendDetail /> }
    ],
  },
  {
    path: "*",
    element: <NotFound />
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>
)
