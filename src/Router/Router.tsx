import { createHashRouter } from "react-router-dom";
import { Dashboard } from "../screens/Dashboard/Dashboard";
import { Detail } from "../screens/Detail/Detail";
import { Form } from "../screens/Form/Form";
import { Intro } from "../screens/Intro/Intro";



export const router = createHashRouter([
  {
    path: "/",
    element: <Intro></Intro>
  },
  {
    path: "/Detail",
    element: <Detail></Detail>
  },
  {
    path: "/Form",
    element: <Form></Form>
  },
  {
    path: "/Dashboard",
    element:<Dashboard></Dashboard>
  },
]);
