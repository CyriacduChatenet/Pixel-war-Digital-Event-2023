import { login } from "../../setup/services/auth.service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { email, password };
    login(data)
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        setError(true);
      });
  };

  return (
    <>
      <h1>Login</h1>
      {error && <p>Les informations ne sont pas correctes</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" required />
        <input type="password" name="password" required />
        <button type="submit">Connexion</button>
      </form>
    </>
  );
};

export default Login;
