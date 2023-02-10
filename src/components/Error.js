import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();
  return (
    <>
      <h1>Oops !!</h1>
      <h2> Something went wrong ..!!</h2>
      <h3>{status + ": " + statusText}</h3>
    </>
  );
};

export default Error;
