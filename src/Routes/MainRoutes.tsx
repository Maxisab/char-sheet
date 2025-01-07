import { createBrowserRouter } from "react-router-dom";
import { ClassProvider } from "../Context/ClassProvider";
import App from "../App";
import { ErrorPage } from "../Pages/ErrorPage";
import { Home } from "../Pages/Home";
import { CharacterSheet } from "../Pages/CharacterSheet";
import CharacterCreation from "../Pages/CharacterCreation";


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
          path: "/character-creation",
          element: <CharacterCreation />
        },
        {
          path: "/character-sheet",
          element: <CharacterSheet />
        }
      ]
    }
  ])
