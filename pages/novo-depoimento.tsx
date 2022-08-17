import { useState } from "react";
import { NextPage } from "next";
import Router from "next/router";

import Link from "next/link";
import axios from "axios";
import styles from "../styles/new_brief.module.scss";
import { Header } from "../components/Header/Header";

import dynamic from "next/dynamic";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
];

const NewBrief: NextPage = () => {
  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");

  const [errorMessage, setErrorMessage] = useState({
    titleError: "",
    briefError: "",
  });

  const [sucessMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitBrief = async () => {
    setErrorMessage({ titleError: "", briefError: "" });
    setSuccessMessage("");
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
        setSuccessMessage(response.data.message);
        setBrief("");
        setTitle("");
        setLoading(false);
      }
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
          value={title}
        />
        <p className={styles.errorMessage}>{errorMessage.titleError}</p>
        <p>Escreva seu depoimento</p>
        <QuillNoSSRWrapper
          modules={modules}
          formats={formats}
          theme="snow"
          onChange={(e) => setBrief(e)}
          value={brief}
        />
        {/* <textarea
          name=""
          id=""
          className={styles.briefInput}
          onChange={(e) => setBrief(e.target.value)}
        /> */}
        <p className={styles.errorMessage}>{errorMessage.briefError}</p>

        <div className={styles.center}>
          <p className={styles.successMessage}>{sucessMessage}</p>
          <button
            disabled={loading}
            className={styles.buttonSubmit}
            onClick={() => submitBrief()}
          >
            {loading ? "Enviando..." : "Enviar depoimento"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewBrief;
