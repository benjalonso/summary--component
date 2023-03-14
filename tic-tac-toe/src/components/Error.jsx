import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="m-32"  id="error-page">
      <h1 className="text-5xl text-center my-5">Oops!</h1>
      <p className="text-center text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="bg-[#313030] rounded">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}