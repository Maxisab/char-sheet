import { createBrowserRouter } from "react-router-dom";
import { ClassProvider } from "../Context/ClassProvider";
import App from "../App";
import { ErrorPage } from "../Pages/ErrorPage";
import { Home } from "../Pages/Home";
import ClassMenu from "../Components/ClassMenu";
import { CharacterSheet } from "../Pages/CharacterSheet";


export const router = createBrowserRouter([
    {
      path: "/",
      element:
        <ClassProvider>
          <App />
        </ClassProvider>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/class-menu",
          element: <ClassMenu />
        },
        {
          path: "/character-sheet",
          element: <CharacterSheet />
        }
      ]
    }
  ])
