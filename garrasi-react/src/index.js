import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import VideoGamePage from "./pages/VideoGamePage";
import Note from "./components/Note";
import SubjectPage from "./pages/SubjectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/subject",
    element: <SubjectPage/>
  },
  {
    path: "/videoGame",
    element: <VideoGamePage/>,
  },
  {
    path: "/note",
    element: <Note/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);