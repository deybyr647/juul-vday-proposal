import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

import juulPirate from "../../public/images/juul_pirate.png";
import Rose from "../components/Rose";

const Confirmed = () => {
  return (
    <section className={"section"}>
      <h1 className={`title is-1 has-text-centered ${styles.title}`}>
        Confirmed! See You Soon Amor!
      </h1>

      <div className={"columns"}>
        <div
          className={
            "column is-flex is-justify-content-center is-align-items-center paddingless is-hidden-mobile"
          }
        >
          <Rose />
        </div>

        <div className={"column paddingless"}>
          <div className={`image ${styles.mainImage}`}>
            <Image
              src={juulPirate}
              alt={"Juul Smiling Gif"}
              priority={true}
              className={`${styles.mainImage}`}
              placeholder={"blur"}
            />
          </div>
        </div>

        <div
          className={
            "column is-flex is-justify-content-center is-align-items-center paddingless"
          }
        >
          <Rose />
        </div>
      </div>

      <div className={"columns"}>
        <div
          className={`column is-flex is-justify-content-space-evenly paddingless ${styles["button-container"]}`}
        >
          <Link href={"/"} className={"button is-primary"}>
            Return To Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Confirmed;
