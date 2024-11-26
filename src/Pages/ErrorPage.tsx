import { isRouteErrorResponse, useRouteError } from "react-router-dom"


export const ErrorPage = () => {
  const error = useRouteError()
  
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Error!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.data.message}</i>
        </p>
      </div>
    )
  }

  return (
    <div className="error-page">
      <h1>Unexpected Error</h1>
      <p>Something went wrong.</p>
      {error instanceof Error && <p>{error.message}</p>}
    </div>
  )

  
}