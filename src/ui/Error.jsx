import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const errors = useRouteError();

  console.log(errors);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errors.message || errors.data}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
