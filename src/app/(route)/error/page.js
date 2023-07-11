import axios from "axios";

const ErrorPage = () => {
  throw new Error("page error");

  return (
    <>
      <div>Error Page</div>
    </>
  );
};

export default ErrorPage;
