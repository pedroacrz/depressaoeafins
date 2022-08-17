import Link from "next/link";
import styles from "../../styles/header.module.scss";
import facelogo from "../../public/face.svg";
import instalogo from "../../public/insta.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link href="/">
          <h1 className={styles.logo}>DA</h1>
        </Link>

        {/* <div className={styles.rightContent}>
          <ul className={styles.list}>
            <li>
              <Image
                src={instalogo}
                width="24.22"
                height="24.22"
                alt="logo instagram"
              />
            </li>
            <li>
              <Image
                src={facelogo}
                width="24.22"
                height="24.22"
                alt="logo facebook"
              />
            </li>
          </ul>
        </div> */}
      </div>
    </header>
  );
};
