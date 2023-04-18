import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./page/Root";
import HomePage from "./page/Home";
import CoursesPage from "./page/Courses";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'courses',
        element: <CoursesPage />
      }
    ]
  }
])


function App() {
  return <RouterProvider router={ router } />;
}

export default App;
