import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import People from './components/People';
import Friends from './components/Friends';

const router = createBrowserRouter([
  {
    path: "/",
    element: <People />,
  },
  {
    path: "/Friends",
    element: <Friends />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
