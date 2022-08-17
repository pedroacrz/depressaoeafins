import { NextPage } from "next";
import Link from "next/link";
import axios from "axios";
import styles from "../styles/new_brief.module.scss";
import { Header } from "../components/Header/Header";
import { useState } from "react";

const NewBrief: NextPage = () => {
  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    titleError: "",
    briefError: "",
  });
  const [loading, setLoading] = useState(false);

  const submitBrief = async () => {
    setErrorMessage({ titleError: "", briefError: "" });

    if (title.length < 5) {
      console.log();
      setErrorMessage({
        titleError: "O título precisa ter no mínimo 5 caracteres.",
        briefError: "",
      });
      return;
    }
    if (brief.length < 10) {
      setErrorMessage({
        titleError: "",
        briefError: "O depoimento precisa ter no mínimo 10 caracteres.",
      });
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post("/api/createBrief", {
        title: title,
        content: brief,
      });
      if (response.status === 201) {
        alert(response.data.message);
      }
      setLoading(false);
      console.log(response);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.form}>
        <Link href="/">
          <p className={styles.back}>Voltar</p>
        </Link>
        <h2>Novo depoimento</h2>

        <p>Título</p>
        <input
          type="text"
          className={styles.titleInput}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p className={styles.errorMessage}>{errorMessage.titleError}</p>
        <p>Escreva seu depoimento</p>
        <textarea
          name=""
          id=""
          className={styles.briefInput}
          onChange={(e) => setBrief(e.target.value)}
        />
        <p className={styles.errorMessage}>{errorMessage.briefError}</p>

        <div className={styles.center}>
          <button
            disabled={loading}
            className={styles.buttonSubmit}
            onClick={() => submitBrief()}
          >
            Enviar depoimento
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewBrief;
