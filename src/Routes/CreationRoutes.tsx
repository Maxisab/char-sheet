import { createBrowserRouter } from "react-router-dom";
import ClassMenu from "../Components/ClassMenu";
import AncestryMenu from "../Components/AncestryMenu";
import BackgroundMenu from "../Components/BackgroundMenu";
import AttributesMenu from "../Components/AttributesMenu";
import SkillsMenu from "../Components/SkillsMenu";

export const router = createBrowserRouter([
  {
    path: "/character-creation/class",
    element: <ClassMenu />
  },
  {
    path: "/character-creation/ancestry",
    element: <AncestryMenu />    
  },
  {
    path: "/character-creation/background",
    element: <BackgroundMenu />
  },
  {
    path: "/character-creation/attributes",
    element: <AttributesMenu />
  },
  {
    path: "/character-creation/skills",
    element: <SkillsMenu />
  }
])
