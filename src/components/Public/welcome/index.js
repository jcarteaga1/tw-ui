import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div>Hola Welcome </div>
      <Link to="login">Login</Link>
      <Link to="signup">SignUp</Link>
    </>
  );
};

export default Welcome;
