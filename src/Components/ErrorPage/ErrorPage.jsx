import { Link } from "react-router-dom";

const ErrorPage = () => {
    
    return (
      <div className="grid gap-10 justify-center items-center my-20 mx-auto text-center">
        <div className="grid gap-10 ">
          <p className="text-2xl font-semiboldbold text-red-400 ">
            Oops you are in wrong path
          </p>

          <Link to={"/"}>
            <button
              style={{ backgroundColor: "salmon", color: "white" }}
              className="btn"
            >
              Go Home
            </button>
          </Link>
        </div>
      </div>
    );

}

export default ErrorPage;