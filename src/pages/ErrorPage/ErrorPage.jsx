import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className=" h-screen flex justify-center items-center flex-col ">
      <h1 className="font-bold text-5xl">Oops!</h1>
      <p className="mt-6">Desculpe, Aconteceu um erro inesperado!  :(</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}