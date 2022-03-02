import React from "react";
import Feed from "./Feed/Feed";
import Head from "./Helper/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Feed do site Cenocchan, com as fotos trazidas da API."
      />
      <Feed />
    </section>
  );
};

export default Home;
