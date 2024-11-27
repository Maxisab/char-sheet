import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-charcoal flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-8 flex flex-col justify-center items-center text-center">
        <div className="max-w-md space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-primary-parchment">
              Welcome to ClassFinder
            </h1>
            <p className="text-primary-parchment/80 text-lg">
              A community-made app to help facilitate character creation in Pathfinder 2E Remaster!
            </p>
            <p className="text-orange-500 italic text-sm">
              Work in Progress! More features will be added in the future
            </p>
          </div>
          
          <Link 
            to="/class-menu" 
            className="inline-block px-6 py-3 
            bg-accent-gold 
            text-neutral-charcoal 
            rounded-lg 
            shadow-lg 
            hover:bg-accent-gold/90 
            transition-colors 
            duration-300 
            font-semibold 
            uppercase 
            tracking-wider"
          >
            Go to Class Selection
          </Link>
        </div>
      </div>
    </div>
  )
}