import type { NextPage } from "next";
import Head from "next/head";
import { Brief } from "../components/Brief/Brief";
import { Header } from "../components/Header/Header";
import styles from "../styles/home.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

type IBrief = {
  id: number;
  title: string;
  content: string;
  urlProfile: string;
  name: string;
  created_at: string;
};

const Home: NextPage = () => {
  const [brief, setBrief] = useState<IBrief[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBriefs() {
      try {
        const response = await axios.get("/api/getBrief");
        setBrief(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getBriefs();
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Depressão e afins - desabafe o quanto quiser, seja livre." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <section className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>Últimos depoimentos</h2>
            <Link href="/novo-depoimento">
              <button className={styles.buttonNewBrief}>Novo depoimento</button>
            </Link>
          </div>

          <div>
            {!loading && brief.length > 0 ? (
              brief.map((brief) => {
                return (
                  <Brief
                    content={brief.content}
                    created_at={brief.created_at}
                    name={brief.name}
                    title={brief.title}
                    urlProfile={brief.urlProfile}
                    key={brief.title}
                    id={brief.id}
                  />
                );
              })
            ) : (
              <div>
                <p>Carregando...</p>
              </div>
            )}
          </div>
        </section>
        <footer></footer>
      </main>
    </div>
  );
};

export default Home;
