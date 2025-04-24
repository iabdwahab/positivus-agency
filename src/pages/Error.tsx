import { Link } from "react-router-dom";

function Error() {
  return (
    <main className="container flex flex-col items-center justify-center gap-8 py-30">
      <h1 className="text-6xl font-bold">Sorry! This page is not found.</h1>
      <Link to="/" className="bg-primary hover:bg-secondary hover:text-primary duration-fast border-primary rounded-lg border px-6 py-3 font-medium">
        Go to Home Page
      </Link>
    </main>
  );
}
export default Error;
