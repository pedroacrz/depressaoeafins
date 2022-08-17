import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import styles from "../../styles/brief_details.module.scss";
import { Header } from "../../components/Header/Header";
import { useEffect, useState } from "react";

type BriefData = {
  title: string;
  content: string;
  urlProfile: string;
  created_at: string;
  name: string;
};

const Brief: NextPage = () => {
  const router = useRouter();

  const { id } = router.query;
  const [brief, setBrief] = useState<BriefData>({} as BriefData);

  const [errorMessage, setErrorMessage] = useState({
    briefError: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBrief();
  }, []);

  const getBrief = async () => {
    setErrorMessage({ briefError: "" });
    setLoading(true);

    try {
      const response = await axios.get<BriefData[]>(`/api/getBriefById/${id}`);
      if (response.data) {
        setBrief(response.data[0]);
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

      <div className={styles.content}>
        <Link href="/">
          <p className={styles.back}>Voltar</p>
        </Link>

        {!loading ? (
          <div>
            <p className={styles.title}>{brief?.title}</p>
            <p className={styles.brief}>{brief?.content}</p>
          </div>
        ) : (
          <div>
            <p>Carregando...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Brief;
