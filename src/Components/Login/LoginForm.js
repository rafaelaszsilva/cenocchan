import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../Hooks/useForm";
import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";
import stylesButton from "../Form/Button.module.css";
import { UserContext } from "../../UserContext";
import Head from "../Helper/Head";
import { ReactComponent as Separator } from "../../Assets/separator.svg";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animationLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        <Error error={error} />
      </form>
      <Link className={styles.reset} to="/login/password/lost">
        Resetar Senha
      </Link>
      <div className={styles.cadastro}>
        <Separator />
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se.</p>
      </div>
      <Link className={stylesButton.button} to="/login/create">
        Cadastro
      </Link>
    </section>
  );
};

export default LoginForm;
