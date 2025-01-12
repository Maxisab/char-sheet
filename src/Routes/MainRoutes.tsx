import { createBrowserRouter } from "react-router-dom";
import { ClassProvider } from "../Context/ClassProvider";
import App from "../App";
import { ErrorPage } from "../Pages/ErrorPage";
import { Home } from "../Pages/Home";
import CharacterSheet from "../Pages/CharacterSheet";
import CharacterCreation from "../Pages/CharacterCreation";
import SkillsMenu from "../Components/SkillsMenu";
import AttributesMenu from "../Components/AttributesMenu";
import BackgroundMenu from "../Components/BackgroundMenu";
import AncestryMenu from "../Components/AncestryMenu";
import ClassMenu from "../Components/ClassMenu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ClassProvider>
        <App />
      </ClassProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "character-creation",
        element: <CharacterCreation />,
        children: [
          {
            path: "class",
            element: <ClassMenu />
          },
          {
            path: "ancestry",
            element: <AncestryMenu />
          },
          {
            path: "background",
            element: <BackgroundMenu />
          },
          {
            path: "attributes",
            element: <AttributesMenu />
          },
          {
            path: "skills",
            element: <SkillsMenu />
          }
        ]
      },
      {
        path: "character-sheet",
        element: <CharacterSheet />
      }
    ]
  }
]);