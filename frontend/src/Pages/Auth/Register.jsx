import "./Auth.css";

// Components
import {Link} from "react-router-dom";
import Message from "../../Components/Message/Message"

// Hooks
import {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import {register, reset} from "../../Slices/authSlice"

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const {loading, error } = useSelector((state) => state.auth);


  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: name, 
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    }

    dispatch(register(user));
  }

  // Clean all authState
  useEffect(() => {
    dispatch(reset());
  }, [dispatch])

  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={name || ""} onChange={(e) => setName(e.target.value )} autoComplete="new-username" />
        <input type="email" placeholder="E-mail"  value={email || ""} onChange={(e) => setEmail(e.target.value )} autoComplete="new-email" />
        <input type="password" placeholder="Senha"  value={password || ""} onChange={(e) => setPassword(e.target.value )} autoComplete="new-password" />
        <input type="password" placeholder="Confirme a senha"  value={confirmPassword || ""} onChange={(e) => setConfirmPassword(e.target.value )} autoComplete="new-password" />
        {!loading && <input type="submit" value="Cadastrar"/>}
        {loading && <input type="submit" value="Aguarde..." disabled/> }
        {error && <Message msg={error} type="error"/>}
      </form>
      <p>
        Já tem conta? <Link to="/login">Click aqui.</Link>
      </p>
    </div>
  )
}

export default Register