import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import AppliedJobs from "../pages/AppliedJobs";

import ErrorPage from "../components/ErrorPage";
import Details from "../components/Details";
import Statistics from './../pages/Statistics';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader: ()=> fetch(`../jobs.json`),
      },
      {
        path: '/job/:id',
        element: <Details/>,
        loader: ()=> fetch(`../jobs.json`),
      },
      {
        path: '/details',
        element: <Statistics/>
      }
    ],
  },
]);
