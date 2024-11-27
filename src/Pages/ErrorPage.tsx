import { isRouteErrorResponse, useRouteError } from "react-router-dom"


export const ErrorPage = () => {
  const error = useRouteError()
  
  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-h-screen w-full bg-neutral-charcoal flex items-center justify-center p-4">
        <div className="bg-primary-burgundy p-8 rounded-lg shadow-xl max-w-md w-full">
          <h1 className="text-3xl font-bold text-primary-parchment mb-4">Error!</h1>
          <p className="text-primary-parchment/80 mb-2">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="italic text-accent-orange">
            {error.statusText || error.data?.message}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-neutral-charcoal flex items-center justify-center p-4">
      <div className="bg-primary-burgundy p-8 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-primary-parchment mb-4">Unexpected Error</h1>
        <p className="text-primary-parchment/80 mb-2">Something went wrong.</p>
        {error instanceof Error && (
          <p className="italic text-accent-orange">{error.message}</p>
        )}
      </div>
    </div>
  )
}