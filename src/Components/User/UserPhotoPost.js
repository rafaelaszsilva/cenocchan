import React, { useState, useEffect } from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_POST } from "../../api";
import Error from "../Helper/Error";
import { useNavigate } from "react-router";

const UserPhotoPost = () => {
  const name = useForm();
  const weight = useForm("number");
  const age = useForm("number");
  const [img, setImg] = useState({});

  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    data && navigate("/account");
  }, [data, navigate]);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("img", img.raw);
    formData.append("name", name.value);
    formData.append("weight", weight.value);
    formData.append("age", age.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="name" {...name} />
        <Input label="Peso" type="number" name="weight" {...weight} />
        <Input label="Idade" type="number" name="age" {...age} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview})` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
