import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>Hola Login </div>
      <Link to="passwordRecovery"> Recuperar contraseña </Link>
      <Link to="signup"> Registrarse </Link>
      <Link to="/"> Welcome </Link>
      <Link to="home">Home</Link>
    </>
  );
};

export default Login;
