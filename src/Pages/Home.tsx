import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
      <div>
        <h1>Welcome to ClassFinder</h1>
        <p>A community made app to help facilitate character creation in Pathfinder 2E Remaster!</p>
        <p>Work in Progress! More features will be added in the future</p>
      </div>
      <Link to="/class-menu">Go to class selection!</Link>
    </div>
  )
}